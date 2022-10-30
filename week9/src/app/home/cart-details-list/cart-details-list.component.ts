import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/shared/interfaces/cart.interface';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-details-list',
  templateUrl: './cart-details-list.component.html',
  styleUrls: ['./cart-details-list.component.scss'],
})
export class CartDetailsListComponent implements OnInit {
  @Input() cartItems!: CartItem[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  deleteCartItem(cartItemId: number): void {
    this.cartService.deleteItem(cartItemId).subscribe(
      (response) => {
        this.removeCartFromArray(cartItemId);
      },
      (error) => {
      },
      () => {
      }
    );
  }

  removeCartFromArray(cartItemId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== cartItemId);
  }
}
