import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/';
import { ProjectionService } from '../../services/projection.service';
import { Projection } from '../../domains/projection';

@Component({
  selector: 'app-edit-projection-page',
  templateUrl: './edit-projection-page.component.html',
  styleUrls: ['./edit-projection-page.component.css']
})
export class EditProjectionPageComponent implements OnInit {
  private id : number;
  private projection : Projection;

  private loaded = false;

  constructor(private route : ActivatedRoute, private projectionService : ProjectionService) { }

  ngOnInit() {
    this.route.params.subscribe(
      res => {
        this.id = +res['id'];

        this.projectionService.getProjection(this.id).subscribe(
          res => {
            this.projection = <Projection> res.json();
            this.loaded = true;
          }
        );
      }
    );
  }

}
