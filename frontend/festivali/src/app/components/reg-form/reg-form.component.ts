import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { LoginService } from '../../services/login.service';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms/src/model';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  private isSuccess = false;
  private isFailure = false;

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
                ],
                [
                  this.checkUser(this.loginSer)
                ]
              ),
              passwords: new FormGroup(
                {
                  password : new FormControl(
                    '',
                    [
                      Validators.required,
                      this.checkPassword()
                    ]
                  ),
                  passconfirm : new FormControl(
                    '',
                    [
                      Validators.required
                    ]
                  ),
                },
                [
                  this.checkPasswordConfirm()
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
  

  constructor(private registrationService : RegistrationService, private loginSer : LoginService) { }

  ngOnInit() {
  }

  public submit() {
    let formJSON = {'name': '', 'lastname': '', 'username': '', 'password':'', 'email':''};
    formJSON.name = this.form.value['name'];
    formJSON.lastname = this.form.value['lastname'];
    formJSON.username = this.form.value['username'];
    formJSON.password = this.form.get('passwords').value['password'];
    formJSON.email = this.form.value['email'];

    this.registrationService.registerUser(formJSON).subscribe(
      res => {
        this.isSuccess = true;
        this.isFailure = false;
        this.form.reset();
      },
      err => {
        this.isFailure = true;
        console.log(err);
      }
    );
  }

  private checkUser(loginService : LoginService) : AsyncValidatorFn {
    return (control: AbstractControl) => {
      return new Observable(obs => {
        loginService.validateUser(control.value).subscribe(
          res => {
            let data = res.json();
            if(data['result']) {
              obs.next({userExists : true})
            }
            else {
              obs.next(null);
            }
          },
          err => {
            console.log(err);
          }
        )
      }).debounceTime(500).distinctUntilChanged().first();
    }
  }

  private checkPassword() : ValidatorFn {
    return (control : AbstractControl) => {
      let str : string = control.value as string;
      if(str.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,12}/g) == null) {
        return {invalidPassword : true}
      }
      return null;
    }
  }

  private checkPasswordConfirm() : ValidatorFn {
    return (control: FormGroup) => {
      let val1 = control.get('password').value;
      let val2 = control.get("passconfirm").value;
      if(val1 != val2) {
        return {invalidConfirm : true };
      }
      return null;
    }
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

  get passwords() {
    return this.form.get('passwords');
  }

  get password() {
    return this.form.get('passwords').get('password');
  }

  get passconfirm() {
    return this.form.get('passwords').get('passconfirm');
  }

  get email() {
    return this.form.get('email');
  }

}
