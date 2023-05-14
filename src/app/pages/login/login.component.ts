import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  googleAuth() {
    this.authService.GoogleAuth();
  }
  signIn() {
    const { email, password } = this.loginForm.value;
    if (email === '') {
      this.showMessage('Email');
      return;
    }
    if (password === '') {
      this.showMessage('Password');
      return;
    }
    this.authService.SignIn(email, password);
    this.loginForm.reset();
  }
  showMessage(message: string) {
    alert(`${message}` + ' cant be empty!');
  }
}
