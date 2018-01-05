import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(private loginService: LoginService, private router : Router) { }

  canActivate() {
    return new Observable<boolean>(obs => {
        this.loginService.checkSession().subscribe(
          res => {
            obs.next(true);
          },
          err => {
            obs.next(false);
            this.router.navigateByUrl("");
          }
        )
      }
    ).first();
  }

}
