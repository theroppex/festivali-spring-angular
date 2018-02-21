import { Injectable } from '@angular/core';
import { Http } from '@angular/http/';
import { LoginService } from './login.service';
import { Reservation } from '../domains/reservation';

@Injectable()
export class ReservationService {

  constructor(private http : Http, private loginService : LoginService) { }


  public getReservationsForSeller() {
    return this.http.get("http://localhost:8080/api/reservations/seller/", {headers : this.loginService.generateAuthHeader()});
  }

  public getReservationsForUser() {
    return this.http.get("http://localhost:8080/api/reservations/user/", {headers : this.loginService.generateAuthHeader()});
  }

  public completeReservation(r : Reservation) {
    return this.http.post("http://localhost:8080/api/reservations/complete/" + r.id, '', {headers : this.loginService.generateAuthHeader()});
  }

  public cancelReservation(r : Reservation) {
    return this.http.post("http://localhost:8080/api/reservations/cancel/" + r.id, '', {headers : this.loginService.generateAuthHeader()});
  }
}
