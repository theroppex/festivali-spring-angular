import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user-service.service';
import { User } from '../../domains/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private loggedIn : boolean = false;
  private user : User;
  private show : boolean = false;

  constructor(private loginService : LoginService, private userService : UserService) { }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
        this.show = true;
      },
      err => {
        this.show = true;
      }
    )

    this.loginService.getPrincipal().subscribe(
      res => {
        this.user = <User> res.json();
      }
    )
  }

  isAdmin() : boolean {
    if(this.user == null) {
      return false;
    }
    else {
      return this.userService.isAdimn(this.user);
    }
  }
}
