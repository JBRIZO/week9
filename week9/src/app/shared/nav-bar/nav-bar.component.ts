import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  // @Input() currentProfile?: Profile;

  constructor() {}

  ngOnInit(): void {}

  logout() {
    // this.jwtService.signOut();
    // this.router.navigate(['/login']);
  }
}
