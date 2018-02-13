import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';

@Injectable()
export class OmdbMovieService {

  constructor(private http : Http) { }

  getMovie(title : string) {
    let params = {t : title, apikey : '4bc437a4'};
    return this.http.get('http://www.omdbapi.com/', {params : params});
  }
}
