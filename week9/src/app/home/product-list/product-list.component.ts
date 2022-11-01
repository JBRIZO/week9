import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/shared/services/cart.service';
import { select, Store } from '@ngrx/store';
import { HomeState } from '../reducers/home.reducers';
import { Observable } from 'rxjs';
import {
  selectAllCategories,
  selectAllProducts,
} from '../selectors/home.selectors';
import { Category } from 'src/app/shared/interfaces/category.interface';
import { HomeActions } from '../action-types';
import { Product } from 'src/app/shared/interfaces/product.interface';

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

  categories$?: Observable<Category[]>;

  products!: Product[];
  loadingProducts = true;

  selectedCategoryFilter?: number | null = null;
  name: string = '';

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private store: Store<HomeState>
  ) {}

  ngOnInit(): void {
    this.categories$ = this.store.pipe(select(selectAllCategories));

    this.store.pipe(select(selectAllProducts)).subscribe((response) => {
      if (response !== undefined) {
        this.products = response.data;
        this.loadingProducts = false;
      }
      this.totalRows = response === undefined ? 0 : response.meta!.total;
      (this.pageSize = response === undefined ? 0 : response.meta!.per_page),
        (this.currentPage =
          response === undefined ? 0 : response.meta!.current_page - 1);
    });
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getProducts();
  }

  getProducts() {
    this.store.dispatch(
      HomeActions.loadProducts({
        page: this.currentPage + 1,
        size: this.pageSize,
        categoryId: this.selectedCategoryFilter!,
        name: this.name,
      })
    );
  }

  addItemToCart(itemId: number) {
    this.cartService.addItem(itemId, 1).subscribe(
      (response) => {
        this.snackBar.open('Item added succesfully!', '', {
          duration: 2000,
        });
        this.store.dispatch(
          HomeActions.addCartItem({
            cart: response.items[response.items.length - 1],
          })
        );
      }
    );
  }
}
