import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../domains/movie';
import { Festival } from '../../domains/festival';
import { FestivalService } from '../../services/festival.service';
import { SelectItem } from 'primeng/primeng';
import { ProjectionService } from '../../services/projection.service';
import { Projection } from '../../domains/projection';
import { Comment } from '../../domains/comment';
import { MovieService } from '../../services/movie.service';
import { Reservation } from '../../domains/reservation';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.css']
})
export class MovieContentComponent implements OnInit {

  @Input() movie : Movie;
  @Input() omdbMovie : any;

  private rating : number;
  private canRate : boolean = false;
  private canComment : boolean = false;

  private showDialog : boolean = false;

  private festivals : Festival[];

  private projections : SelectItem[];

  private comments : Comment[];

  private comment : Comment = new Comment();

  private reservation : Reservation = new Reservation();

  constructor(private festivalService : FestivalService, 
              private projectionService : ProjectionService,
              private movieService : MovieService) { }

  ngOnInit() {
    console.log(this.omdbMovie);

    this.festivalService.getValidFestivalsByMovie(this.movie.title).subscribe(
      res => {
        this.festivals = <Festival[]> res.json();
      }
    );

    this.projectionService.getProjectionsByMovie(this.movie.title).subscribe(
      res => {
        let sItems : SelectItem[] = [];

        for(let p of <Projection[]> res.json()) {
          sItems.push({label : p.location.name + " - " + p.date + ":" + p.hour + " price:" + p.price, value : p})
        }

        this.projections = sItems;
      }
    );

    this.movieService.getComments(this.movie.id).subscribe(
      res => {
        this.comments = <Comment[]> res.json();
      }
    );

    this.movieService.canComment(this.movie.id).subscribe(
      res => {
        this.canComment = <boolean> res.json();
        this.canRate = this.canComment;
      }
    );
  }

  rate() {
    this.canRate = false;
    this.movie.rating += this.rating;
    this.movie.count += 1;
    this.movieService.updateMovie(this.movie).subscribe();
  }

  confirmReservation() {
    this.reservation.date = new Date();
    this.movieService.makeReservation(this.reservation).subscribe(
      res => {
        this.showDialog = false;
        this.reservation = new Reservation();
      }
    );
  }

  validReservation() : boolean {
    return this.reservation.projection != null &&
            this.reservation.tickets != null &&
            this.reservation.tickets > 0 &&
            this.reservation.tickets <= this.reservation.projection.maxtickets;
  }

  showReservation() {
    this.showDialog = true;
  }

  validComment() {
    return this.comment.post != null &&
            this.comment.post.length > 0 &&
            this.comment.post.length <= 512 &&
            this.canComment;
  }

  submitComment() {
    this.comment.movie = this.movie;
    this.movieService.createComment(this.comment).subscribe(
      res => {
        this.comments.push(<Comment> res.json());
        this.comment = new Comment();
      }
    );
  }
}
