import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialStorageService } from '../services/credential-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private credentialStorageService: CredentialStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.credentialStorageService.signOut();
    this.router.navigate(['/login']);
  }
}
