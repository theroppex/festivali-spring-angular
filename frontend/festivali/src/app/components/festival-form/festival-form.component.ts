import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Festival } from '../../domains/festival';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Place } from '../../domains/place';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-festival-form',
  templateUrl: './festival-form.component.html',
  styleUrls: ['./festival-form.component.css']
})
export class FestivalFormComponent implements OnInit {
  private menuItems : MenuItem[];
  private tabNumber : number = 0;
  private festival : Festival = new Festival();
  private minDate : Date = new Date();
  private rangeDates : Date[];
  private places : SelectItem[];


  constructor(private confirmationService : ConfirmationService) {
    let p1 = new Place();
    let p2 = new Place();
    p1.id = 0;
    p1.name = "Beograd";
    p2.id = 1;
    p2.name = "Nis";
    this.places = [
      {label : p1.name, value : p1},
      {label : p2.name, value : p2}
    ];
   }

  ngOnInit() {
    this.menuItems = [
      {label : "Essential Information"},
      {label : "Place"},
      {label : "Date"},
    ];
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
                console.log(this.festival);
            }
        });
    }

  public selectDate() {
    this.festival.startDate = this.rangeDates[0];
    this.festival.endDate = this.rangeDates[1];
  }

  public isValid() : boolean {
    return this.festival.description != null
            && this.festival.name != null
            && this.festival.place != null 
            && this.festival.startDate != null 
            && this.festival.endDate != null; 
  }
}
