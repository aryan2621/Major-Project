import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  constructor(public authService: AuthService) {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  signUp() {
    const { email, password, confirmPassword } = this.signUpForm.value;
    if (email === '') {
      this.showMessage('Email');
      return;
    }
    if (password === '') {
      this.showMessage('Password');
      return;
    }
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }
    this.authService.SignUp(email, password);
    this.signUpForm.reset();
  }
  showMessage(message: string) {
    alert(`${message}` + ' cant be empty!');
  }
  googleAuth() {
    this.authService.GoogleAuth();
  }
}
