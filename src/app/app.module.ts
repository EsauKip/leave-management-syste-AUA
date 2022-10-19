import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaveComponent } from './leave/leave.component';

import { HolidaysComponent } from './holidays/holidays.component';
 import { ReactiveFormsModule } from '@angular/forms';
 
import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddToCalendarModule } from 'add-events-to-google-calendar';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProfileComponent,
    LeaveComponent,
    HolidaysComponent,
    LoginComponent,
    SignupComponent,
    
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
   
    MatCardModule,
    MatProgressBarModule,
    AddToCalendarModule
  ],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
