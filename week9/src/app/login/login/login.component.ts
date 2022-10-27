import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthenticationService } from 'src/app/services/authentication.service';

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
    // private authService: AuthenticationService,
    private router: Router
  ) {
    this.form = fb.group({
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
    console.log(this.form.valid);
    if (this.form.valid) {
      // this.login();
      this.router.navigate(['/home']);
    }
  }

  // login() {
  //   this.loginError = false
  //   this.authService.login(this.form.value).subscribe(
  //     (response: boolean) => {
  //       if (response) {
  //         this.router.navigate(['/home']);
  //       }
  //     },
  //     (error: Error) => {
  //       if (!error) {
  //         this.loginError = true;
  //       }
  //     }
  //   );
  // }
}
