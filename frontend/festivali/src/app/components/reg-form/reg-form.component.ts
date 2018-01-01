import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  form = new FormGroup({
              name : new FormControl(
                '',
                [
                  Validators.required
                ]
              ),
              lastname : new FormControl(
                '',
                [
                  Validators.required
                ]
              ),
              username : new FormControl(
                '',
                [
                  Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(25)
                ]
              ),
              password : new FormControl(
                '',
                [
                  Validators.required,
                  Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,12}")
                ]
              ),
              passconfirm : new FormControl(
                '',
                [
                  Validators.required
                ]
              ),
              email : new FormControl(
                '',
                [
                  Validators.required,
                  Validators.email
                ]
              )
            });
  

  constructor() { }

  ngOnInit() {
  }

  get name() {
    return this.form.get('name');
  }

  get lastname() {
    return this.form.get('lastname');
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get passconfirm() {
    return this.form.get('passconfirm');
  }

  get email() {
    return this.form.get('email');
  }

}
