import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { FestivalService } from '../../services/festival.service';
import { Festival } from '../../domains/festival';

@Component({
  selector: 'app-festival-page',
  templateUrl: './festival-page.component.html',
  styleUrls: ['./festival-page.component.css']
})
export class FestivalPageComponent implements OnInit {
  private id : number;
  private festival : Festival = new Festival();
  private loaded : boolean = false;

  constructor(private route : ActivatedRoute, private festivalService : FestivalService) { }

  ngOnInit() {
    this.route.params.subscribe(
      res => {
        this.id = +res['id'];

        this.festivalService.getFestival(this.id).subscribe(
          res => {
            this.festival = <Festival> res.json();
            this.loaded = true;
          }
        );
      }
    );
  }

}
