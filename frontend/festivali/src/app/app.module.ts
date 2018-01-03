import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

import { LoginService } from './services/login.service';
import { RegistrationService } from './services/registration.service';

import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { LogoutComponent } from './components/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomePageComponent,
    RegisterPageComponent,
    RegFormComponent,
    UserMenuComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomePageComponent},
        {path: 'register', component: RegisterPageComponent},
      ]
    ),
  ],
  providers: 
  [
    LoginService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
