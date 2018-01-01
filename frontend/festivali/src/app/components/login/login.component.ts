import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm = {'username':'', 'password':''};

  private validInput: boolean = false;
  private validUsername: boolean = false;
  private validPassword: boolean = false;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  validateInput() {
    this.validInput = this.validUsername && this.validPassword;
  }

  validateUsername() {
    this.validUsername = false;
    if(this.loginForm.username.length >= 3) {
      this.loginService.validateUser(this.loginForm.username).subscribe(
        response => {
          let data = response.json();
          this.validUsername = data['result'];
          this.validateInput();
        },
        err => {
          console.log(err);
        }
      );
    }
    this.validateInput();
  }

  validatePassword() {
    this.validPassword = this.loginForm
      .password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,12}") != null;

    this.validateInput();
  }

}
