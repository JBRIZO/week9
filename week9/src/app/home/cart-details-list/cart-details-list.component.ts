import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/shared/interfaces/cart.interface';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { HomeState } from '../reducers/home.reducers';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeActions } from '../action-types';

@Component({
  selector: 'app-cart-details-list',
  templateUrl: './cart-details-list.component.html',
  styleUrls: ['./cart-details-list.component.scss'],
})
export class CartDetailsListComponent implements OnInit {
  @Input() cartItems!: CartItem[];

  constructor(
    private cartService: CartService,
    private store: Store<HomeState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  deleteCartItem(cartItemIndex: number): void {
    const item = this.cartItems[cartItemIndex];
    this.cartService
      .deleteItem(item.id!)
      .pipe(
        tap((response) => {
          this.store.dispatch(HomeActions.cartItemRemoved({ item: item }));
        })
      )
      .subscribe(
        () => {
          this.removeItemFromArray(item.id!);
        },
        (error: Error) => {
          this.snackBar.open(error.message, '', { duration: 3000 });
          this.store.dispatch(HomeActions.cartItemRemoved({ item: item }));
        },
        () => {}
      );
  }

  removeItemFromArray(cartItemId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== cartItemId);
  }
}
