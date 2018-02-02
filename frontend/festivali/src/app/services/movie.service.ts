import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { LoginService } from './login.service';

@Injectable()
export class MovieService {

  constructor(private http : Http, private loginService : LoginService) { }

  public getMovies() {
    return this.http.get("http://localhost:8080/api/movies/", {headers : this.loginService.generateAuthHeader()});
  }
}
