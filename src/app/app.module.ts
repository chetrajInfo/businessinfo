import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SubscribepageComponent } from './subscribepage/subscribepage.component';
import { EmplogininfoComponent } from './emplogininfo/emplogininfo.component';
import { EmptimesheetComponent } from './emptimesheet/emptimesheet.component';
import { EmpscheduleComponent } from './empschedule/empschedule.component';
import { PayrollformComponent } from './payrollform/payrollform.component';
import { MatNativeDateModule } from '@angular/material/core';
//import { HotTableModule } from '@handsontable/angular';
//import { AgGridModule } from 'ag-grid-angular';


import { MatDatepickerModule } from '@angular/material/datepicker'; // import the MatDatepickerModule here

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    DashboardComponent,
    SubscribepageComponent,
    EmplogininfoComponent,
    EmptimesheetComponent,
    EmpscheduleComponent,
    PayrollformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule, // add MatDatepickerModule here
    //HotTableModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
