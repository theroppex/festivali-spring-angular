import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Festival } from '../../domains/festival';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Place } from '../../domains/place';
import { SelectItem } from 'primeng/components/common/selectitem';
import { FestivalService } from '../../services/festival.service';
import { Router } from '@angular/router';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-festival-form',
  templateUrl: './festival-form.component.html',
  styleUrls: ['./festival-form.component.css']
})
export class FestivalFormComponent implements OnInit {
  private hasFailed : boolean = false;
  private menuItems : MenuItem[];
  private tabNumber : number = 0;
  private festival : Festival = new Festival();
  private minDate : Date = new Date();
  private rangeDates : Date[];
  private places : SelectItem[];


  constructor(private confirmationService : ConfirmationService, 
              private festivalService : FestivalService,
              private placesService : PlaceService, 
              private router : Router) {}

  ngOnInit() {
    this.menuItems = [
      {label : "Essential Information"},
      {label : "Place"},
      {label : "Date"},
    ];

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

  public next() {
    this.tabNumber = this.tabNumber != 2 ? this.tabNumber + 1 : this.tabNumber;
  }

  public prev() {
    this.tabNumber = this.tabNumber != 0 ? this.tabNumber - 1 : this.tabNumber;
  }

  public confirm() {
        this.confirmationService.confirm({
            message: 'You are about to create new festival. Are you sure?',
            accept: () => {
                this.festivalService.createFestival(this.festival)
                .subscribe(
                  acc => {
                    this.hasFailed = false;
                    let fest = <Festival> acc.json();
                    this.router.navigateByUrl("/createprojection/" + fest.id);
                  },
                  rej => {
                    this.hasFailed = true;
                  }
                )
            }
        });
    }

  public selectDate() {
    this.festival.startDate = this.rangeDates[0];
    this.festival.endDate = this.rangeDates[1];
  }

  public isValid() : boolean {
    return this.festival.description != null
            && this.festival.description != ""
            && this.festival.name != null
            && this.festival.name != ""
            && this.festival.place != null 
            && this.festival.startDate != null 
            && this.festival.endDate != null; 
  }
}
