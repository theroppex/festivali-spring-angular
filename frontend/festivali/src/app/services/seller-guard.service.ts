import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router/';
import { LoginService } from './login.service';
import { UserService } from './user-service.service';
import { Observable } from 'rxjs/Rx';
import { User } from '../domains/user';

@Injectable()
export class SellerGuardService implements CanActivate {

  constructor(private loginService : LoginService, private userSrvice : UserService, private router: Router) { }

  canActivate() {
    return new Observable<boolean> (obs => {
      this.loginService.getPrincipal().subscribe(
        res => {
          let user : User = <User> res.json();
          if(this.userSrvice.isSeller(user)){
            obs.next(true);
          }
          else{
            obs.next(false);
            this.router.navigateByUrl("");
          }
        },
        err => {
          obs.next(false);
          this.router.navigateByUrl("");
        }
      )
    }).first()
  }
}
