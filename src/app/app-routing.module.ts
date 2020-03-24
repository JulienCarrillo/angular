import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { PrescriptionsComponent } from './components/prescriptions/prescriptions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
// import { addListener } from 'cluster';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  { path: 'login', component: LoginComponent},

  { path: 'signup', component: SignupComponent},

  { path: '', component: MenuComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'doctors', component: DoctorsComponent},
      {path: 'patients', component: PatientsComponent},
      {path: 'medicines', component: MedicinesComponent},
      {path: 'prescriptions', component: PrescriptionsComponent},
      {path: 'profile', component: ProfileComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
