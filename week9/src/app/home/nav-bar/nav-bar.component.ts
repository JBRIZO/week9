import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { User } from '../../shared/interfaces/user.interface';
import { CartService } from '../../shared/services/cart.service';
import { CredentialStorageService } from '../../shared/services/credential-storage.service';
import { HomeState } from '../reducers';
import { tap } from 'rxjs/operators';
import { cart } from '../home.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  user?: User;

  cartItemCount$!: Observable<number>;

  constructor(
    private credentialStorageService: CredentialStorageService,
    private router: Router,
    private cartService: CartService,
    private store: Store<HomeState>
  ) {}

  ngOnInit(): void {
    this.user = this.credentialStorageService.getStoredUser()!;
    this.getCart();

    this.cartItemCount$ = this.store.pipe(
      select((state: any) =>
        state.home.cart !== undefined ? state.home.cart!.items.length : 0
      )
    );
  }

  logout(): void {
    this.credentialStorageService.signOut();
    this.router.navigate(['/login']);
  }

  getCart(): void {
    this.cartService
      .getCart()
      .pipe(
        tap((response) => {
          this.store.dispatch(cart(response));
        })
      )
      .subscribe();
  }
}
