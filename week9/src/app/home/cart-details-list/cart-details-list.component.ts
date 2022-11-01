import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { HomeState } from '../reducers/home.reducers';
import { HomeActions } from '../action-types';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { selectProductById } from '../selectors/home.selectors';
import { Update } from '@ngrx/entity';
import { cartItemUpdated } from '../home.actions';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cart-details-list',
  templateUrl: './cart-details-list.component.html',
  styleUrls: ['./cart-details-list.component.scss'],
})
export class CartDetailsListComponent implements OnInit {
  @Input() cartItems!: CartItem[] | null;

  constructor(
    private cartService: CartService,
    private store: Store<HomeState>
  ) {}

  ngOnInit(): void {}

  getProduct(productId: number): Product | undefined {
    let product: Product | undefined = undefined;
    this.store
      .pipe(select(selectProductById(productId)))
      .subscribe((response) => {
        product = response;
      });
    return product;
  }

  deleteCartItem(cartItemIndex: number): void {
    const item = this.cartItems![cartItemIndex];
    this.cartService.deleteItem(item.id!).subscribe(
      () => {
        this.removeItemFromArray(item.id!);
        this.store.dispatch(HomeActions.cartItemRemoved({ item: item }));
      },
      () => {
        if (this.cartItems?.length === 1) {
          this.removeItemFromArray(item.id!);
          this.store.dispatch(HomeActions.cartItemRemoved({ item: item }));
        }
      }
    );
  }

  removeItemFromArray(cartItemId: number): void {
    this.cartItems = this.cartItems!.filter((item) => item.id !== cartItemId);
  }

  modifyCartItem(cartItemIndex: number, quantity: string): void {
    const parsedQuantity = parseInt(quantity);
    const newCartItem: CartItem = {
      ...this.cartItems![cartItemIndex],
      quantity: parsedQuantity,
    };
    const update: Update<CartItem> = {
      id: newCartItem.id!,
      changes: newCartItem,
    };

    this.store.dispatch(cartItemUpdated({ update }));
  }

  decrement(quantity: string): string {
    const result = parseInt(quantity) === 1 ? 1 : parseInt(quantity) - 1;
    return result.toString();
  }

  increment(quantity: string): string {
    const result = parseInt(quantity) + 1;
    return result.toString();
  }
}
