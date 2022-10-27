import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [AuthenticationService, StorageService],
  exports: [
    NavBarComponent,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule
  ],
})
export class SharedModule {}
