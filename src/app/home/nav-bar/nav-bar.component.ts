import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { User } from '../../shared/interfaces/user.interface';
import { CartService } from '../../shared/services/cart.service';
import { CredentialStorageService } from '../../shared/services/credential-storage.service';
import { HomeState } from '../reducers/home.reducers';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HomeActions } from '../action-types';
import {
  selectAllCartItems,
  selectCartItemsCount,
} from '../selectors/home.selectors';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';

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
    private store: Store<HomeState>
  ) {}

  ngOnInit(): void {
    this.user = this.credentialStorageService.getStoredUser()!;
    this.cartItemCount$ = this.store.pipe(select(selectCartItemsCount));
  }

  logout(): void {
    this.credentialStorageService.signOut();
    this.router.navigate(['/login']);
    this.store.dispatch(HomeActions.clearStore());
  }
}
