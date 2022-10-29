import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CategoryList } from 'src/app/shared/interfaces/categorylist.interface';
import { ProductList } from 'src/app/shared/interfaces/productlist.interface';
import { CategoryService } from 'src/app/shared/services/category.service';
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
  pageSizeOptions: number[] = [5, 10, 25];

  productList!: ProductList;
  loadingProducts = true;

  categories?: CategoryList;
  loadingCategories = true;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
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
          this.loadingProducts = false;
        }
      );
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      () => {},
      () => {
        this.loadingCategories = false;
      }
    );
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getProducts();
  }
}
