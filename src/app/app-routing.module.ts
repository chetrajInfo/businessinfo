import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscribepageComponent } from './subscribepage/subscribepage.component';
import { EmplogininfoComponent } from './emplogininfo/emplogininfo.component';

const routes: Routes = [
 { path:'', component:LoginComponent},
 { path:'register', component:RegisterComponent},
 { path:'reset', component:ResetComponent},
 { path:'dashboard', component:DashboardComponent},
 { path:'subscription', component:SubscribepageComponent},
 { path:'empinfo', component:EmplogininfoComponent},
 {path: 'dashboard', component: DashboardComponent, children: [ { path: 'employee-info', component: EmplogininfoComponent } ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
