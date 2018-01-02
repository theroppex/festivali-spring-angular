import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private router : Router, private loginService : LoginService) { }

  ngOnInit() {
    this.loginService.checkSession()
      .subscribe(
        res => {
          this.router.navigateByUrl("");
        }
      )
  }

}
