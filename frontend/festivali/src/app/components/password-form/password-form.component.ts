import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router/';
import { PassJson } from '../../domains/passJson';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent implements OnInit {
  private passJson : PassJson = new PassJson();
  private confPass = '';

  private isError : boolean = false;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  isValid() : boolean {
    return  this.confPass == this.passJson.newPass &&
            this.passJson.oldPass != null &&
            this.passJson.newPass != null &&
            this.passJson.newPass != '' &&
            this.passJson.newPass != '' &&
            this.passJson.oldPass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,12}/g).toString() == this.passJson.oldPass &&
            this.passJson.newPass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,12}/g).toString() == this.passJson.newPass;
  }

  confirm()  {
    this.userService.changePassword(this.passJson).subscribe(
      res => {
        this.router.navigateByUrl("/home");
      },
      err => {
        this.isError = true;
      }
    )
  }
}
