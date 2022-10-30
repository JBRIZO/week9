import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { CartService } from '../services/cart.service';
import { CredentialStorageService } from '../services/credential-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  user?: User;

  cartItemCount = 0;

  constructor(
    private credentialStorageService: CredentialStorageService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.user = this.credentialStorageService.getStoredUser()!;
    this.getCart();
  }

  logout(): void {
    this.credentialStorageService.signOut();
    this.router.navigate(['/login']);
  }

  getCart(): void {
    this.cartService.getCart().subscribe((response) => {
      this.cartItemCount = response.items.length;
    });
  }
}
