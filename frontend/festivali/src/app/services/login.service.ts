import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {
  private validUser : boolean;

  constructor(private http:Http) { }

  public validateUser(username:string) {
    let url : string = "http://localhost:8080/api/users/exists?username=" + username;
    return this.http.get(url);
  }
}
