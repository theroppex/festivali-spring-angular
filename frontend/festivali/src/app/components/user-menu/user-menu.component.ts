import { Component, OnInit } from '@angular/core';
import { User } from '../../domains/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  private user : User;

  constructor(private loginService : LoginService) { 
    this.user = new User();
   }

  ngOnInit() {
    this.loginService.getPrincipal().subscribe(
      res => {
        this.user = <User> res.json();
      }
    );
  }

}
