import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Projection } from '../../domains/projection';
import { ProjectionService } from '../../services/projection.service';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-edit-projection-form',
  templateUrl: './edit-projection-form.component.html',
  styleUrls: ['./edit-projection-form.component.css']
})
export class EditProjectionFormComponent implements OnInit {
  @Input() projection : Projection;

  constructor(private projectionService : ProjectionService, private router : Router) { }

  ngOnInit() {
  }

  isValid() : boolean {
    return  this.projection.hour != null &&
            this.projection.tickets != null &&
            this.projection.maxtickets != null &&
            this.projection.hour >= 11 &&
            this.projection.hour <= 24 &&
            this.projection.tickets > 0 &&
            this.projection.maxtickets > 0;
  }

  confirm() {
    this.projectionService.updateProjection(this.projection).subscribe(
      res => {
        this.router.navigateByUrl("admin");
      }
    );
  }
}
