import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { CredentialStorageService } from '../services/credential-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  user?: User;

  constructor(
    private credentialStorageService: CredentialStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.credentialStorageService.getStoredUser()!;
  }

  logout() {
    this.credentialStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
