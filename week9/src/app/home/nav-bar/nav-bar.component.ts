import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../../shared/interfaces/user.interface';
import { CartService } from '../../shared/services/cart.service';
import { CredentialStorageService } from '../../shared/services/credential-storage.service';
import { HomeState } from '../reducers';
import { tap } from 'rxjs/operators'
import { cartCreator } from '../home.actions';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  user?: User;

  cartItemCount = 0

  constructor(
    private credentialStorageService: CredentialStorageService,
    private router: Router,
    private cartService: CartService,
    private store : Store<HomeState>
  ) {}

  ngOnInit(): void {
    this.user = this.credentialStorageService.getStoredUser()!;
    this.getCart();

    this.store.subscribe(
      (state : any) => {
        this.cartItemCount = state.home.cart !== undefined ? state.home.cart!.items.length : this.cartItemCount
      }
    )
  }

  logout(): void {
    this.credentialStorageService.signOut();
    this.router.navigate(['/login']);
  }

  getCart(): void {
    this.cartService.getCart().pipe(tap(
      (response) => {
        this.store.dispatch(cartCreator(response))
      }
    )).subscribe((response) => {
      this.cartItemCount = response.items.length;
    });
  }
}
