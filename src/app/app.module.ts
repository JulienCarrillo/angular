import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './material.module';
import { ListDataService } from './services/list-data/list-data.service';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api/api.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AngularTokenModule } from 'angular-token';
import { CookieModule } from '@ngx-toolkit/cookie';




@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    MenuComponent,
    DoctorsComponent,
    PatientsComponent,
    MedicinesComponent,
    PrescriptionsComponent,
    ProfileComponent,
    HomeComponent,
    SearchBarComponent,
    LoginComponent,
    SignupComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CookieModule.forRoot(),
    
    MaterialModule
  ],
  providers: [
    ListDataService,
    ApiService,
    MatDatepickerModule,
    AngularTokenModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
