import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;
  loginError = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      this.login();
    }
  }

  login() {
    this.loginError = false;
    this.authService.login(this.form.value).subscribe(
      (response: boolean) => {
        if (response) {
          this.router.navigate(['/home']);
        }
      },
      (error: Error) => {
        this.loginError = true;
      }
    );
  }
}
