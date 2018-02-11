import { Component, OnInit } from '@angular/core';
import { Festival } from '../../domains/festival';
import { FestivalService } from '../../services/festival.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.css']
})
export class HomepageContentComponent implements OnInit {
  private festivals : Festival[];
  private rangeDates : Date[];
  private loggedIn : boolean = false;
  private title : string;

  constructor(private festivalService : FestivalService, private loginService : LoginService) { }

  ngOnInit() {
    this.festivalService.getValidFestivals().subscribe(
      res => {
        this.festivals = <Festival[]> res.json();
      }
    );

    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      }
    );
  }

  filterByDates() {
    if(this.rangeDates[0] != null && this.rangeDates[1] != null) {
      this.festivalService.getValidFestivals().subscribe(
        res => {
          let newFestivals : Festival[] = [];
          for(let f of <Festival[]> res.json()) {
            if(new Date(f.startDate) <= this.rangeDates[1] && new Date(f.endDate) >= this.rangeDates[0]) {
              newFestivals.push(f);
            }
          }
          this.festivals = newFestivals;
        }
      );
    }
  }

  filterByDatesAndMovies() {
    if(this.title == null || this.title == '') {
      if(this.rangeDates[0] != null && this.rangeDates[1] != null) {
        this.festivalService.getValidFestivals().subscribe(
          res => {
            let newFestivals : Festival[] = [];
            for(let f of <Festival[]> res.json()) {
              if(new Date(f.startDate) <= this.rangeDates[1] && new Date(f.endDate) >= this.rangeDates[0]) {
                newFestivals.push(f);
              }
            }
            this.festivals = newFestivals;
          }
        );
      }
    }
    else {
      if(this.rangeDates[0] != null && this.rangeDates[1] != null) {
        this.festivalService.getValidFestivalsByMovie(this.title).subscribe(
          res => {
            let newFestivals : Festival[] = [];
            for(let f of <Festival[]> res.json()) {
              if(new Date(f.startDate) <= this.rangeDates[1] && new Date(f.endDate) >= this.rangeDates[0]) {
                newFestivals.push(f);
              }
            }
            this.festivals = newFestivals;
          }
        );
      }
    }
  }

}
