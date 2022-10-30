import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryList } from 'src/app/shared/interfaces/categorylist.interface';
import { ProductList } from 'src/app/shared/interfaces/productlist.interface';
import { CartService } from 'src/app/shared/services/cart.service';
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

  selectedCategoryFilter?: number | null = null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService : CartService,
    private snackBar : MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(nameSearched?: string): void {
    this.productService
      .getProducts(
        this.currentPage + 1,
        this.pageSize,
        nameSearched,
        this.selectedCategoryFilter!
      )
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

  searchByName(nameSearched: string) {
    this.getProducts(nameSearched);
  }

  addItemToCart(itemId : number) {
    this.cartService.addItem(itemId,1).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      },
      () => {
        this.snackBar.open('Item added succesfully!','', {
          duration: 2000
        })
      }
    )
  }

}
