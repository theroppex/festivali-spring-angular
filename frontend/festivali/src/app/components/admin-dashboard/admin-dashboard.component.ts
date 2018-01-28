import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import { User } from '../../domains/user';
import { LoginService } from '../../services/login.service';
import { Role } from '../../domains/role';
import { Festival } from '../../domains/festival';
import { FestivalService } from '../../services/festival.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  private currentUser : User;
  private activeUsers : User[];
  private inactiveUsers : User[];
  private festivals : Festival[];

  constructor(private usersSrvice : UserService, 
              private loginService : LoginService,
              private festivalService : FestivalService) { }

  ngOnInit() {
    this.usersSrvice.getActiveUsers().subscribe(
      res => {
        this.activeUsers = <User[]> res.json();
      }
    );
    this.usersSrvice.getInactiveUsers().subscribe(
      res => {
        this.inactiveUsers = <User[]> res.json();
      }
    );
    this.loginService.getPrincipal().subscribe(
      res => {
        this.currentUser = <User> res.json();
      }
    );

    this.festivalService.getFestivals().subscribe(
      res => {
        this.festivals = <Festival[]> res.json();
      }
    )
  }

  deleteUser(user : User) {
    this.usersSrvice.deleteUser(user).subscribe();
    const index = this.activeUsers.indexOf(user);
    this.activeUsers = [ ...this.activeUsers.slice(0, index), ...this.activeUsers.slice(index + 1, this.activeUsers.length ) ];
  }

  deleteInactiveUser(user : User) {
    this.usersSrvice.deleteUser(user).subscribe();
    const index = this.inactiveUsers.indexOf(user);
    this.inactiveUsers = [ ...this.inactiveUsers.slice(0, index), ...this.inactiveUsers.slice(index + 1, this.inactiveUsers.length ) ];
  }

  banUser(user : User) {
    this.usersSrvice.banUser(user).subscribe();
    this.activeUsers[this.activeUsers.indexOf(user)].banned = true;
    this.activeUsers = [...this.activeUsers];
  }

  unbanUser(user : User) {
    this.usersSrvice.unbanUser(user).subscribe();
    this.activeUsers[this.activeUsers.indexOf(user)].banned = false;
    this.activeUsers = [...this.activeUsers];
  }

  isSeller(user : User) : boolean {
    return this.usersSrvice.isSeller(user);
  }

  setSeller(user : User) {
    this.usersSrvice.setSeller(user).subscribe(
      res => {
        location.reload();
      }
    );
  }

  removeSeller(user : User) {
    this.usersSrvice.removeSeller(user).subscribe(
      res => {
        location.reload();
      }
    );
  }

  activateUser(user : User) {
    this.usersSrvice.activateUser(user).subscribe(
      res => {
        this.activeUsers.push(user);
        this.activeUsers=[...this.activeUsers];
        const index = this.inactiveUsers.indexOf(user);
        this.inactiveUsers = [ ...this.inactiveUsers.slice(0, index), ...this.inactiveUsers.slice(index + 1, this.inactiveUsers.length ) ];
      }
    );
  }

  setVisible(festival : Festival) {
    festival.visible = true;
    this.festivalService.updateFestival(festival).subscribe(
      res => {
        this.festivals = [...this.festivals];
      }
    )
  }

  setInvisible(festival : Festival) {
    festival.visible = false;
    this.festivalService.updateFestival(festival).subscribe(
      res => {
        this.festivals = [...this.festivals];
      }
    )
  }
}
