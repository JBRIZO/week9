import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  // @Input() currentProfile?: Profile;

  constructor(private jwtService: StorageService) {}

  ngOnInit(): void {}

  logout() {
    // this.jwtService.signOut();
    // this.router.navigate(['/login']);
  }
}
