import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { LoginService } from './login.service';
import { Movie } from '../domains/movie';
import { Comment } from '../domains/comment';
import { Reservation } from '../domains/reservation';

@Injectable()
export class MovieService {

  constructor(private http : Http, private loginService : LoginService) { }

  public getMovies() {
    return this.http.get("http://localhost:8080/api/movies/", {headers : this.loginService.generateAuthHeader()});
  }

  public getMovie(id : number) {
    return this.http.get("http://localhost:8080/api/movies/" + id, {headers : this.loginService.generateAuthHeader()});
  }

  public createMovie(movie : Movie) {
    return this.http.post("http://localhost:8080/api/movies/", movie, {headers : this.loginService.generateAuthHeader()});
  }

  public updateMovie(movie : Movie) {
    return this.http.patch("http://localhost:8080/api/movies/", movie, {headers : this.loginService.generateAuthHeader()});
  }

  public getComments(id : number) {
    return this.http.get("http://localhost:8080/api/movies/comments/" + id, {headers : this.loginService.generateAuthHeader()});
  }

  public createComment(comment : Comment) {
    return this.http.post("http://localhost:8080/api/comments/", comment, {headers : this.loginService.generateAuthHeader()});
  }

  makeReservation(reservation : Reservation) {
    return this.http.post("http://localhost:8080/api/reservations/", reservation, {headers : this.loginService.generateAuthHeader()});
  }

  public canComment(id : number) {
    return this.http.get("http://localhost:8080/api/movies/cancomment/" + id, {headers : this.loginService.generateAuthHeader()});
  }
}
