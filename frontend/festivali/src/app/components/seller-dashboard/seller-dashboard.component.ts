import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../domains/reservation';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {
  private reservations : Reservation[];

  private selectedReservation : Reservation = new Reservation();
  private showDialog : boolean = false;

  constructor(private reservationService : ReservationService) { }

  ngOnInit() {
    this.reservationService.getReservationsForSeller().subscribe(
      res => {
        this.reservations = <Reservation[]> res.json();
      }
    );
  }

  sellReservation(res : Reservation) {
    this.selectedReservation = res;
    this.showDialog = true;
  }

  confirmSale() {
    this.reservationService.completeReservation(this.selectedReservation).subscribe(
      res => {
        this.reservations.splice(this.reservations.indexOf(this.selectedReservation), 1);
        this.reservations = [...this.reservations];
        this.selectedReservation = new Reservation();
        this.showDialog = false;
      }
    );
  }

}
