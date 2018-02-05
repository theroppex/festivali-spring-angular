import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { LoginService } from './login.service';
import { Movie } from '../domains/movie';

@Injectable()
export class MovieService {

  constructor(private http : Http, private loginService : LoginService) { }

  public getMovies() {
    return this.http.get("http://localhost:8080/api/movies/", {headers : this.loginService.generateAuthHeader()});
  }

  public createMovie(movie : Movie) {
    return this.http.post("http://localhost:8080/api/movies/", movie, {headers : this.loginService.generateAuthHeader()});
  }
}
