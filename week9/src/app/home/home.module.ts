import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { HomeGuard } from './home.guard';
import { StoreModule } from '@ngrx/store';
import * as fromHome from './reducers';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CartComponent } from './cart/cart.component';
import { CartDetailsListComponent } from './cart-details-list/cart-details-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './home.effects';
import { ProductsResolver } from './resolvers/products.resolver';

@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    CartDetailsListComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.homeReducer),
    MatPaginatorModule,
    MatCheckboxModule,
    MatMenuModule,
    EffectsModule.forRoot([HomeEffects]),
  ],
  providers: [HomeGuard, ProductsResolver],
})
export class HomeModule {}
