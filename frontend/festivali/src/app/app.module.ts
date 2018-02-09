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
import { MenuModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { GMapModule } from 'primeng/primeng';

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
import { FestivalService } from './services/festival.service';
import { PlaceService } from './services/place.service';
import { LocationService } from './services/location.service';
import { CreatePlacePageComponent } from './components/create-place-page/create-place-page.component';
import { PlaceFormComponent } from './components/place-form/place-form.component';
import { CreateLocationPageComponent } from './components/create-location-page/create-location-page.component';
import { LocationFormComponent } from './components/location-form/location-form.component';
import { CreateProjectionPageComponent } from './components/create-projection-page/create-projection-page.component';
import { ProjectionFormComponent } from './components/projection-form/projection-form.component';
import { MovieService } from './services/movie.service';
import { ProjectionService } from './services/projection.service';
import { FestivalPageComponent } from './components/festival-page/festival-page.component';
import { FestivalContentComponent } from './components/festival-content/festival-content.component';


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
    CreatePlacePageComponent,
    PlaceFormComponent,
    CreateLocationPageComponent,
    LocationFormComponent,
    CreateProjectionPageComponent,
    ProjectionFormComponent,
    FestivalPageComponent,
    FestivalContentComponent,
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
        {path: 'createfestival', component: CreateFestivalPageComponent, canActivate: [AuthGuardService, AdminGuardService]},
        {path: 'createplace', component: CreatePlacePageComponent, canActivate: [AuthGuardService, AdminGuardService]},
        {path: 'createlocation', component: CreateLocationPageComponent, canActivate: [AuthGuardService, AdminGuardService]},
        {path: 'createprojection/:id', component: CreateProjectionPageComponent, canActivate: [AuthGuardService, AdminGuardService]},
        {path: 'festival/:id', component: FestivalPageComponent, canActivate: [AuthGuardService]}
      ]
    ),
    AccordionModule,
    DataTableModule,
    SharedModule,
    StepsModule,
    CalendarModule,
    ConfirmDialogModule,
    DropdownModule,
    MenuModule,
    DialogModule,
    GMapModule,
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
    ConfirmationService,
    FestivalService,
    PlaceService,
    LocationService,
    MovieService,
    ProjectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
