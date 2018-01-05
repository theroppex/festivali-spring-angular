import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Observable } from 'rxjs/Rx';
import { LoginService } from './login.service';
import { User } from '../domains/user';
import { UserService } from './user-service.service';
import { Router } from '@angular/router';

@Injectable()
export class AdminGuardService implements CanActivate{

  constructor(private loginService : LoginService, private userSrvice : UserService, private router: Router) { }

  canActivate() {
    return new Observable<boolean> (obs => {
      this.loginService.getPrincipal().subscribe(
        res => {
          let user : User = <User> res.json();
          if(this.userSrvice.isAdimn(user)){
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
