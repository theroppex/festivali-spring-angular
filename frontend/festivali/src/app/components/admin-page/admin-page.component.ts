import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  private items : MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label : 'Create',
        items: [
          {label: 'Place', icon: 'fa-plus', routerLink : '/createplace'},
          {label: 'Location', icon: 'fa-plus', routerLink : '/createlocation'},
          {label: 'Festival', icon: 'fa-plus', routerLink : '/createfestival'}
        ]
      }
    ]
  }

}
