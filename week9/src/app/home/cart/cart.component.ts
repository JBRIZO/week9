import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/shared/interfaces/cart.interface';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { HomeState } from '../reducers/home.reducers';
import { selectAllCartItems } from '../selectors/home.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart!: Cart;

  cartItems$!: Observable<CartItem[]>;
  subTotal = 0;

  constructor(
    private store: Store<HomeState>
  ) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.pipe(select(selectAllCartItems));
  }
}
