import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { LoginService } from './login.service';
import { Place } from '../domains/place';

@Injectable()
export class PlaceService {

  constructor(private http : Http, private loginService : LoginService) { }

  public getPlaces() {
    return this.http.get("http://localhost:8080/api/places/", {headers : this.loginService.generateAuthHeader()});
  }

  public createPlace(place : Place) {
    return this.http.post("http://localhost:8080/api/places/", place, {headers : this.loginService.generateAuthHeader()});
  }
}
