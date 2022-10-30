import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product!: Product;

  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.paramMap.get('productId')!);
  }

  getProduct(productSlug: string) {
    this.product?.image?.url;
    this.productService.getProduct(productSlug).subscribe(
      (response) => {
        this.product = response;
      },
      () => {},
      () => {
        this.loading = false;
      }
    );
  }

  addToCart(quantity: string): void {
    this.cartService
      .addItem(this.product.master!.id, parseInt(quantity))
      .subscribe(
        (response) => {
          this.snackBar.open('Item added succesfully!', '', {
            duration: 3000,
          });
        },
        (error) => {
          console.log(error);
          this.snackBar.open('An error ocurred!', '', {
            duration: 3000,
          });
        }
      );
  }
}
