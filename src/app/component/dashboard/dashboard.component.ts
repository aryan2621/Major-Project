import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // smooth scroll to id
  constructor(private viewportScroller: ViewportScroller){

  }
  goToElement(id: string): void {
    this.viewportScroller.scrollToAnchor(id);
  }
}
