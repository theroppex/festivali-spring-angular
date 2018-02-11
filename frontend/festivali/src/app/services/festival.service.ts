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

  public updateFestival(festival : Festival) {
    return this.http.patch("http://localhost:8080/api/festivals/", festival, {headers : this.loginService.generateAuthHeader()});
  }

  public getFestivals() {
    return this.http.get("http://localhost:8080/api/festivals/");
  }

  public getFestival(id : number) {
    return this.http.get("http://localhost:8080/api/festivals/" + id, {headers : this.loginService.generateAuthHeader()});
  }

  public getValidFestivals() {
    return this.http.get("http://localhost:8080/api/festivals/valid/", {headers : this.loginService.generateAuthHeader()});
  }

  public getValidFestivalsByMovie(title : string) {
    return this.http.get("http://localhost:8080/api/festivals/valid/movie/", {headers : this.loginService.generateAuthHeader(), params : {title : title}});
  }

  public getMoviesByFestival(id : number) {
    return this.http.get("http://localhost:8080/api/festivals/"+ id +"/movies/", {headers : this.loginService.generateAuthHeader()});
  }
}
