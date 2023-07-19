import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResetComponent } from '../reset/reset.component';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  isSubmitted: boolean = false;  // add this line

  credentialsError: boolean = false; // new field


  //this constructor and openResetDialog() is used to show pop up message for reseting user name and password
  //when user forget and dont forget to import (import {MatDialog} form '@angular/material/dialog')
  constructor(public dialog: MatDialog, private router: Router, private userRegisterService: UserregisterService) {}


  openResetDialog() {
    this.dialog.open(ResetComponent);
  }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
        username : new FormControl(null, Validators.required),
        password : new FormControl(null, Validators.required),
        business : new FormControl(null, Validators.required),
        id: new FormControl(null, Validators.required)
    });
  }
  

  onSubmit(): void {
    this.isSubmitted = true;
    this.credentialsError = false;
    this.checkCredentials().subscribe((isValid) => {
      if (isValid) {
        console.log(this.loginForm.value);
        this.loginForm.reset();
        this.isSubmitted = false;
        this.router.navigate(['/dashboard']); // Redirect to the dashboard page
      } else {
        console.log('Invalid credentials');
        this.credentialsError= true;
        // Display an error message indicating invalid credentials
      }
    });
  }
  
  checkCredentials(): Observable<boolean> {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    const business = this.loginForm.get('business')?.value;
    const id = this.loginForm.get('id')?.value;
  
    return this.userRegisterService.checkCredentials(username, password, business, id);
  }
  
  

}
