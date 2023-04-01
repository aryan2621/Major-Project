import { Component } from '@angular/core';
import { TeamMembers } from 'src/utils/team-members';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  teamMembers = TeamMembers;
  constructor() {
    
  }
}
