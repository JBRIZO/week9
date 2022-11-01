import { NgModule, ResolvedReflectiveFactory } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsResolver } from './resolvers/products.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products/:productId',
        component: ProductComponent,
      },
      {
        path: 'products',
        component: ProductListComponent,
        resolve: {
          products: ProductsResolver,
        },
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: '',
        redirectTo: 'products',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
