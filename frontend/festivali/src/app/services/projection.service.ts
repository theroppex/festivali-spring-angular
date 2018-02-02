import { Injectable } from '@angular/core';
import { Projection } from '../domains/projection';
import { Http } from '@angular/http/';
import { LoginService } from './login.service';

@Injectable()
export class ProjectionService {

  constructor(private http : Http, private loginService : LoginService) { }


  public createProjection(projection : Projection) {
    return this.http.post("http://localhost:8080/api/projections/", projection, {headers : this.loginService.generateAuthHeader()});
  }
}
