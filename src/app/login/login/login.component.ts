import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
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
  loading = false;

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

  get email(): AbstractControl {
    return this.form.get('email') as AbstractControl;
  }

  get password(): AbstractControl {
    return this.form.get('password') as AbstractControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.login();
    }
  }

  login(): void {
    this.loginError = false;
    this.loading = true;
    this.authService.login(this.form.value).subscribe(
      (response: boolean) => {
        if (response) {
          this.router.navigate(['/home']);
        }
      },
      (error: Error) => {
        this.loginError = true;
        this.loading = false;
      }
    );
  }
}
