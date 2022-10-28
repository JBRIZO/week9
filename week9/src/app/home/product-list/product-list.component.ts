import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/app/shared/interfaces/product-list.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  productList!: ProductList
  loading = true

  constructor(private productService : ProductService ) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (response : ProductList) => {
        this.productList = response
      },
      () => {},
      () => {
        this.loading = false
      }
    )
  }
}
