import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';

@Component({
  selector: 'app-cart-details-list',
  templateUrl: './cart-details-list.component.html',
  styleUrls: ['./cart-details-list.component.scss'],
})
export class CartDetailsListComponent implements OnInit {
  @Input() cartItems!: CartItem[];

  constructor() {}

  ngOnInit(): void {}
}
