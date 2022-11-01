import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { LikesService } from './services/likes.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CamelCaseInterceptor } from './helpers/camel-case.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    JwtModule,
    RouterModule,
    MatBadgeModule,
    MatSnackBarModule,
  ],
  providers: [
    CredentialStorageService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    ProductService,
    CategoryService,
    CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CamelCaseInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    LikesService,
  ],
  exports: [
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
    MatSnackBarModule,
    FormsModule,
    MatProgressBarModule,
  ],
})
export class SharedModule {}
