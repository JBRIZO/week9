import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductList } from 'src/app/shared/interfaces/productlist.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  productList!: ProductList;
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts(this.currentPage + 1, this.pageSize)
      .subscribe(
        (response: ProductList) => {
          this.productList = response;
          this.currentPage = response.meta?.current_page! - 1;
          this.totalRows = response.meta?.total!;
        },
        () => {},
        () => {
          this.loading = false;
        }
      );
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getProducts();
  }
}
