import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GuestGuardService implements CanActivate{

  constructor(private loginService: LoginService, private router : Router) { }

  canActivate() {
    return new Observable<boolean>(obs => {
        this.loginService.checkSession().subscribe(
          res => {
            obs.next(false);
            this.router.navigateByUrl("");
          },
          err => {
            obs.next(true);
          }
        )
      }
    ).first();
  }

}
