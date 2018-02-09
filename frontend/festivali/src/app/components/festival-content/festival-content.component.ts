import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Festival } from '../../domains/festival';
import { Projection } from '../../domains/projection';
import { Movie } from '../../domains/movie';
import { FestivalService } from '../../services/festival.service';

declare var google: any;

@Component({
  selector: 'app-festival-content',
  templateUrl: './festival-content.component.html',
  styleUrls: ['./festival-content.component.css']
})
export class FestivalContentComponent implements OnInit {
  @Input() festival : Festival;

  private centerLat : number = 0.0;
  private centerLon : number = 0.0;

  private movies : Movie[];

  options: any;
  overlays: any[];

  constructor(private festivalsService : FestivalService) { }

  ngOnInit() {
    this.initMap();
    this.getMovies();
  }

  private initMap() {
    if(this.festival.projections.length > 0) {
      this.centerLat = this.festival.projections[0].location.lat;
      this.centerLon = this.festival.projections[0].location.lon;
    }
    this.options = {
      center: {lat: this.centerLat, lng: this.centerLon},
      zoom: 12
    };

    let newOverlays : any[] = [];

    for(let p of this.festival.projections) {
      newOverlays.push(new google.maps.Marker({position: {lat: p.location.lat, lng: p.location.lon}, title: p.location.name}));
    }
    this.overlays = newOverlays;
  }

  private getMovies() {
    this.festivalsService.getMoviesByFestival(this.festival.id).subscribe(
      res => {
        this.movies = <Movie[]> res.json();
      }
    );
  }

}
