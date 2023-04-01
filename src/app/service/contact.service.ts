import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private fireStore: Firestore) {}
  async submitEmail(
    email: string,
    subject: string,
    message: string
  ): Promise<boolean> {
    const Id = uuidv4();
    try {
      const contactRef = doc(collection(this.fireStore, 'contact'), Id);
      const res = await setDoc(contactRef, {
        email,
        subject,
        message,
      });
      console.log('Email sent successfully', res);
      return true;
    } catch (error) {
      console.log('Error sending email', error);
      return false;
    }
  }
}
