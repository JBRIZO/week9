import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { HomeGuard } from './home.guard';

@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [HomeGuard],
})
export class HomeModule {}
