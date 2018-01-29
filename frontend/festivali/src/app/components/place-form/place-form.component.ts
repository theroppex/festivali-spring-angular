import { Component, OnInit } from '@angular/core';
import { Place } from '../../domains/place';
import { PlaceService } from '../../services/place.service';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {

  private place : Place = new Place();

  constructor(private placesService : PlaceService, private router : Router) { }

  ngOnInit() {
  }

  isValid() : boolean {
    return this.place.name != null && this.place.name != "";
  }

  confirm() {
    this.placesService.createPlace(this.place).subscribe(
      res => {
        this.router.navigateByUrl("/admin");
      }
    );
  }
}
