import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { FestivalService } from '../../services/festival.service';
import { Festival } from '../../domains/festival';
import { Projection } from '../../domains/projection';
import { SelectItem } from 'primeng/primeng';
import { LocationService } from '../../services/location.service';
import { Location } from '../../domains/location';
import { Movie } from '../../domains/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-projection-form',
  templateUrl: './projection-form.component.html',
  styleUrls: ['./projection-form.component.css']
})
export class ProjectionFormComponent implements OnInit {
  private id : number;
  private projection : Projection = new Projection();
  private locations : SelectItem[];
  private movies : SelectItem[];
  private minDate : Date = new Date();
  private maxDate : Date = new Date();
  private festival : Festival = new Festival();
  private showDialog : boolean = false;

  constructor(private route : ActivatedRoute, 
              private festivalService : FestivalService,
              private locationService: LocationService,
              private movieService : MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(
      res => {
        this.id = +res['id'];

        this.festivalService.getFestival(this.id).subscribe(
          res => {
            this.festival = <Festival> res.json();
            this.projection.festival = this.festival;

            this.minDate = new Date(this.festival.startDate);
            this.maxDate = new Date(this.festival.endDate);
          }
        );
      }
    );

    this.locationService.getLocations().subscribe(
      res => {
        let newSelectItems : SelectItem[] = [];

        let newLocation : Location[] = <Location[]> res.json();

        for(let p of newLocation) {
          newSelectItems.push({label : p.name, value : p});
        }

        this.locations = newSelectItems;
      }
    );

    this.movieService.getMovies().subscribe(
      res => {
        let newSelectItems : SelectItem[] = [];

        let newMovies : Movie[] = <Movie[]> res.json();

        for(let p of newMovies) {
          newSelectItems.push({label : p.title, value : p});
        }

        this.movies = newSelectItems;
      }
    );
  }


  isValid() : boolean {
    return  this.projection.date != null &&
            this.projection.festival != null &&
            this.projection.hour != null &&
            this.projection.location != null &&
            this.projection.movie != null &&
            this.projection.tickets != null &&
            this.projection.hour >= 11 &&
            this.projection.hour <= 24 &&
            this.projection.tickets > 0;
  }

  confirm() {

  }

  showMoviesMenu() {
    this.showDialog = !this.showDialog;
  }
}
