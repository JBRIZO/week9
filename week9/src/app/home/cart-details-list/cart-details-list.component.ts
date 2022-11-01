import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { HomeState } from '../reducers/home.reducers';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeActions } from '../action-types';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { selectProductById } from '../selectors/home.selectors';
import { Update } from '@ngrx/entity'

@Component({
  selector: 'app-cart-details-list',
  templateUrl: './cart-details-list.component.html',
  styleUrls: ['./cart-details-list.component.scss'],
})
export class CartDetailsListComponent implements OnInit {
  @Input() cartItems!: CartItem[] | null;

  items!: CartItem[]

  constructor(
    private cartService: CartService,
    private store: Store<HomeState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.items = this.cartItems!
    this.items[0].quantity = 0
  }

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
      (error: Error) => {
        this.snackBar.open(error.message, '', { duration: 3000 });
        this.store.dispatch(HomeActions.cartItemRemoved({ item: item }));
      },
      () => {}
    );
  }

  removeItemFromArray(cartItemId: number): void {
    this.cartItems = this.cartItems!.filter((item) => item.id !== cartItemId);
  }

  modifyCartItem(cartItemIndex: number, quantity: string): void {
    const parsedQuantity = parseInt(quantity)

    const newCartItem : CartItem = {
      ...this.cartItems![cartItemIndex],
      quantity: parsedQuantity
    }

    const update : Update<CartItem> = { 
      id: newCartItem.id!,
      changes: newCartItem
    }


    }
    // this.store.dispatch(
    //   HomeActions.cartItemUpdated
    //   HomeActions.modifyCart({ item: this.cartItems![cartItemIndex] })
    // );
  // }
}
