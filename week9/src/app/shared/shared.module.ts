import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CredentialStorageService } from './services/credential-storage.service';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoryService } from './services/category.service';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    JwtModule,
    RouterModule,
    MatBadgeModule,
  ],
  providers: [
    CredentialStorageService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    ProductService,
    CategoryService,
    CartService,
  ],
  exports: [
    NavBarComponent,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    JwtModule,
    RouterModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
  ],
})
export class SharedModule {}
