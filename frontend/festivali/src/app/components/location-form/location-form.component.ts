import { Component, OnInit } from '@angular/core';
import { Location } from '../../domains/location';
import { SelectItem } from 'primeng/primeng';
import { Place } from '../../domains/place';
import { PlaceService } from '../../services/place.service';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit {
  private location : Location = new Location();
  private places : SelectItem[];

  constructor( private placesService : PlaceService, private locationService : LocationService, private router : Router) { }

  ngOnInit() {
    this.placesService.getPlaces().subscribe(
      res => {
        let newSelectItems : SelectItem[] = [];

        let newPlaces : Place[] = <Place[]> res.json();

        for(let p of newPlaces) {
          newSelectItems.push({label : p.name, value : p});
        }

        this.places = newSelectItems;
      }
    );
  }

  confirm() {
    this.locationService.createLocation(this.location).subscribe(
      res => {
        this.router.navigateByUrl("/admin");
      }
    );
  }

  isValid() : boolean {
    return  this.location.name != null &&
            this.location.lat != null &&
            this.location.lon != null &&
            this.location.place != null &&
            this.location.name != "" &&
            this.location.lon >= -180 &&
            this.location.lon <= 180 &&
            this.location.lat >= -90 &&
            this.location.lat <= 90;
  }
}
