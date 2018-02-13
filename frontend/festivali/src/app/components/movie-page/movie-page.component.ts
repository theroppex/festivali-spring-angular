import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { Movie } from '../../domains/movie';
import { MovieService } from '../../services/movie.service';
import { OmdbMovieService } from '../../services/omdb-movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  private id : number;
  private movie : Movie = new Movie();
  private omdbMovie : any;
  private loaded : boolean = false;

  constructor(private route : ActivatedRoute, 
              private movieService : MovieService,
              private omdbService : OmdbMovieService) { }

  ngOnInit() {
    this.route.params.subscribe(
      res => {
        this.id = +res['id'];
        this.movieService.getMovie(this.id).subscribe(
          res => {
            this.movie = <Movie> res.json();
            this.omdbService.getMovie(this.movie.title).subscribe(
              res => {
                this.omdbMovie = res.json();
                this.loaded = true;
              }
            );
          }
        );
      }
    );
  }

}
