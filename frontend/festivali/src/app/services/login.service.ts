import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {
  private validUser : boolean;

  constructor(private http:Http) { }

  public validateUser(username:string) {
    let url : string = "http://localhost:8080/api/users/exists?username=" + username;
    return this.http.get(url);
  }

  public loginUser(username : string, password : string) {
    let url = "http://localhost:8080/api/users/token/";
    let cred = btoa(username + ":" + password);
    let header = "Basic " + cred;
    let headers = new Headers({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : header
    });

    return this.http.get(url, {headers : headers});
  }

  public checkSession() {
    let url = "http://localhost:8080/api/users/session";
    return this.http.get(url, {headers : this.generateAuthHeader()});
  }

  public generateAuthHeader() : Headers {
    return new Headers({'x-auth-token':localStorage.getItem("xAuthToken")});
  }
}
