import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoginService } from './login.service';
import { Festival } from '../domains/festival';

@Injectable()
export class FestivalService {

  constructor(private http : Http, private loginService : LoginService) { }

  public createFestival(festival : Festival) {
    return this.http.post("http://localhost:8080/api/festivals/", festival, {headers : this.loginService.generateAuthHeader()});
  }
}
