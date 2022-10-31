import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cart } from 'src/app/shared/interfaces/cart.interface';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { HomeState } from '../reducers';
import { tap } from 'rxjs/operators';
import { cart } from '../home.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar : MatSnackBar
  ) {}

  ngOnInit(): void {}

  deleteCartItem(cartItemId: number): void {
    this.cartService
      .deleteItem(cartItemId)
      .pipe(
        tap((response) => {
          this.store.dispatch(cart(response))
        })
      )
      .subscribe(
        () => {
          this.removeItemFromArray(cartItemId);
        },
        (error : Error) => {
          this.snackBar.open(error.message,'',{duration: 3000})
        },
        () => {}
      );
  }

  removeItemFromArray(cartItemId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== cartItemId);
  }
}
