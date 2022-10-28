import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from './shared/authentication.service';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './reducers';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule, StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducers)],
  providers: [LoginGuard, AuthenticationService],
})
export class LoginModule {}
