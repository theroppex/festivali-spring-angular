import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegistrationService {

  constructor(private http:Http) { }

  public registerUser(x) {
    return this.http.post("http://localhost:8080/api/users/register/", x);
  }
}
