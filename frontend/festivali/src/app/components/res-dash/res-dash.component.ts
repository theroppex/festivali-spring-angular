import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../domains/reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-res-dash',
  templateUrl: './res-dash.component.html',
  styleUrls: ['./res-dash.component.css']
})
export class ResDashComponent implements OnInit {
  private reservations : Reservation[];

  constructor(private reservationService : ReservationService) { }

  ngOnInit() {
    this.reservationService.getReservationsForUser().subscribe(
      res => {
        this.reservations = <Reservation[]> res.json();
      }
    );
  }

  disabledCancel(res : Reservation) : boolean {
    return res.cancelled == true || res.fulfilled == true || new Date(res.projection.date) < new Date();
  }

  isMarked(res : Reservation) : boolean {
    return new Date(res.projection.date) < new Date();
  } 

  cancel(res : Reservation) {
    res.cancelled = true;
    this.reservationService.cancelReservation(res).subscribe();
  }
}
