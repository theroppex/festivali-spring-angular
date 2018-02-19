import { Injectable } from '@angular/core';
import { User } from '../domains/user';
import { Role } from '../domains/role';
import { LoginService } from './login.service';
import { Http } from '@angular/http';
import { PassJson } from '../domains/passJson';

@Injectable()
export class UserService {

  constructor(private loginService : LoginService, private http : Http) { }

  public isAdimn(user : User) : boolean {
    for(let role of user.roles) {
      if(role.name == "ADMIN")
        return true;
    }
    return false;
  }

  public isSeller(user : User) : boolean {
    for(let role of user.roles) {
      if(role.name == "SELLER")
        return true;
    }
    return false;
  }


  public getActiveUsers() {
    let url = "http://localhost:8080/api/users/active";
    return this.http.get(url, {headers : this.loginService.generateAuthHeader()});
  }

  public getInactiveUsers() {
    let url = "http://localhost:8080/api/users/inactive";
    return this.http.get(url, {headers : this.loginService.generateAuthHeader()});
  }

  public deleteUser(user : User) {
    let url = "http://localhost:8080/api/users/" + user.userId;
    return this.http.delete(url, {headers : this.loginService.generateAuthHeader()});
  }

  public banUser(user : User) {
    let url = "http://localhost:8080/api/users/ban/" + user.userId;
    return this.http.patch(url, '', {headers : this.loginService.generateAuthHeader()});
  }

  public unbanUser(user : User) {
    let url = "http://localhost:8080/api/users/unban/" + user.userId;
    return this.http.patch(url, '', {headers : this.loginService.generateAuthHeader()});
  }

  public activateUser(user : User) {
    let url = "http://localhost:8080/api/users/activate/" + user.userId;
    return this.http.patch(url, '', {headers : this.loginService.generateAuthHeader()});
  }

  public setSeller(user : User) {
    let url = "http://localhost:8080/api/users/setseller/" + user.userId;
    return this.http.patch(url, '', {headers : this.loginService.generateAuthHeader()});
  }

  public removeSeller(user : User) {
    let url = "http://localhost:8080/api/users/removeseller/" + user.userId;
    return this.http.patch(url, '', {headers : this.loginService.generateAuthHeader()});
  }

  public changePassword(pass : PassJson) {
    let url = "http://localhost:8080/api/users/changepassword/";
    return this.http.post(url, pass, {headers : this.loginService.generateAuthHeader()});
  }
}
