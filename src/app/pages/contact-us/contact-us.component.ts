import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactForm: FormGroup;
  isSubmittedBool = false;
  constructor() {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(''),
      message: new FormControl('', [Validators.required]),
    });
  }
  submitForm() {
    this.isSubmittedBool = true;
    console.log(this.contactForm.value);
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
  get subject() {
    return this.contactForm.get('subject');
  }
  getEmailRequiredError(): boolean {
    return this.email && this.email.hasError('required') && this.isSubmittedBool
      ? true
      : false;
  }
  getEmailInvalidError(): boolean {
    return this.email && this.email.hasError('email') && this.isSubmittedBool
      ? true
      : false;
  }
  getMessageRequiredError(): boolean {
    return this.message &&
      this.message.hasError('required') &&
      this.isSubmittedBool
      ? true
      : false;
  }
}
