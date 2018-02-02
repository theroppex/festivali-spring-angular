import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { LoginService } from './login.service';
import { Location } from '../domains/location';

@Injectable()
export class LocationService {

  constructor(private http : Http, private loginService : LoginService) { }

  public getLocations() {
    return this.http.get("http://localhost:8080/api/locations/", {headers : this.loginService.generateAuthHeader()});
  }

  public createLocation(location : Location) {
    return this.http.post("http://localhost:8080/api/locations/", location, {headers : this.loginService.generateAuthHeader()});
  }

  public deleteLocation(location : Location) {
    return this.http.delete("http://localhost:8080/api/locations/" + location.id, {headers : this.loginService.generateAuthHeader()});
  }
}
