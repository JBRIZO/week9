import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { addCartItem } from '../home.actions';
import { selectProductById } from '../selectors/home.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: Product;

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private store: Store
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('productId')!);
    this.store.pipe(select(selectProductById(id))).subscribe(
      (response) => {
        if (response !== undefined) {
          this.product = response!;
        }
      },
      () => {},
      () => {
        this.loading = false;
      }
    );
  }

  addToCart(quantity: string): void {
    this.cartService
      .addItem(this.product?.master!.id!, parseInt(quantity))
      .subscribe(
        (response) => {
          this.snackBar.open('Item added succesfully!', '', {
            duration: 3000,
          });
          this.store.dispatch(
            addCartItem({ cart: response.items[response.items.length - 1] })
          );
        },
        (error) => {
          this.snackBar.open('An error ocurred!', '', {
            duration: 3000,
          });
        }
      );
  }
}
