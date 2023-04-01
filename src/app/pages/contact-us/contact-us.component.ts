import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';
import { MIN_VISIBLE_TIME } from 'src/constant';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl('', [Validators.required]),
  });

  isSubmittedBool = false;
  messageError = false;
  messageSent = false;

  constructor(private contactService: ContactService) {}
  async submitForm() {
    this.isSubmittedBool = true;
    if (this.contactForm.valid) {
      const email = this.contactForm.get('email')?.value;
      const subject = this.contactForm.get('subject')?.value;
      const message = this.contactForm.get('message')?.value;
      const res = await this.contactService.submitEmail(
        email,
        subject,
        message
      );
      if (res) {
        this.messageSent = true;
        setTimeout(() => {
          this.messageSent = false;
        }, MIN_VISIBLE_TIME);
      } else {
        this.messageError = true;
        setTimeout(() => {
          this.messageError = false;
        }, MIN_VISIBLE_TIME);
      }
    }
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
