import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../domains/movie';
import { Festival } from '../../domains/festival';
import { FestivalService } from '../../services/festival.service';
import { SelectItem } from 'primeng/primeng';
import { ProjectionService } from '../../services/projection.service';
import { Projection } from '../../domains/projection';
import { Comment } from '../../domains/comment';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.css']
})
export class MovieContentComponent implements OnInit {

  @Input() movie : Movie;
  @Input() omdbMovie : any;

  private rating : number;
  private canRate : boolean = true;

  private showDialog : boolean = false;

  private festivals : Festival[];

  private projections : SelectItem[];

  private comments : Comment[];

  private comment : Comment = new Comment();

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
  }

  rate() {
    this.canRate = false;
  }

  confirmReservation() {

  }

  validReservation() : boolean {
    return false;
  }

  showReservation() {
    this.showDialog = true;
  }

  validComment() {
    return this.comment.post != null &&
            this.comment.post.length > 0 &&
            this.comment.post.length <= 512;
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
