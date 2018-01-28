import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { LoginService } from './login.service';

@Injectable()
export class LocationService {

  constructor(private http : Http, private loginService : LoginService) { }

  public getLocations() {
    return this.http.get("http://localhost:8080/api/locations/", {headers : this.loginService.generateAuthHeader()});
  }
}
