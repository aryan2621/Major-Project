import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private auth: AuthService) {}
  user: User = {
    id: '',
    email: '',
    displayName: '',
    photoURL: '',
    emailVerified: false,
  };
  ngOnInit(): void {
   this.user = this.auth.getUser();
  }
  signOut() {
    this.auth.SignOut();
  }
}
