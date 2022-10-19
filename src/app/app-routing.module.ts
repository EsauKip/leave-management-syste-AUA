import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveComponent } from './leave/leave.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {redirectTo:'',path:'login',pathMatch:'full'},
  {path: 'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},


  {path:'dashboard',component:DashboardComponent},
  {path:'leave',component:LeaveComponent},
  {path:'profile',component:ProfileComponent},
  {path:'holidays',component:HolidaysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
