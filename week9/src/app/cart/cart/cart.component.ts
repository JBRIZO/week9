import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/interfaces/cart.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart!: Cart;

  loading = true;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart(): void {
    this.cartService.getCart().subscribe(
      (response) => {
        this.cart = response;
      },
      () => {},
      () => {
        this.loading = false;
      }
    );
  }
}
