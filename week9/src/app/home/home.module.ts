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
import  { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducers), MatProgressSpinnerModule],
  providers: [HomeGuard],
})
export class HomeModule {}
