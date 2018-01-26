import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionModule, DataTableModule, SharedModule, DropdownModule } from 'primeng/primeng';
import { StepsModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';

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
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { GuestGuardService } from './services/guest-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { UserService } from './services/user-service.service';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MessagesPageComponent } from './components/messages-page/messages-page.component';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './components/messages/messages.component';
import { CreateFestivalPageComponent } from './components/create-festival-page/create-festival-page.component';
import { FestivalFormComponent } from './components/festival-form/festival-form.component';


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
    AdminPageComponent,
    AdminDashboardComponent,
    MessagesPageComponent,
    MessagesComponent,
    CreateFestivalPageComponent,
    FestivalFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomePageComponent},
        {path: 'register', component: RegisterPageComponent, canActivate: [GuestGuardService]},
        {path: 'admin', component: AdminPageComponent, canActivate: [AuthGuardService, AdminGuardService]},
        {path: 'messages', component: MessagesPageComponent, canActivate: [AuthGuardService]},
        {path: 'createfestival', component: CreateFestivalPageComponent},
      ]
    ),
    AccordionModule,
    DataTableModule,
    SharedModule,
    StepsModule,
    CalendarModule,
    ConfirmDialogModule,
    DropdownModule,
  ],
  providers: 
  [
    LoginService,
    RegistrationService,
    AuthGuardService,
    GuestGuardService,
    AdminGuardService,
    UserService,
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
