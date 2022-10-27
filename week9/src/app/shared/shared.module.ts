import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
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

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [AuthenticationService, CredentialStorageService],
  exports: [
    NavBarComponent,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
  ],
})
export class SharedModule {}
