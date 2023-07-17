import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ResetComponent } from '../reset/reset.component';

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
  constructor(public dialog: MatDialog) {}

  openResetDialog() {
    this.dialog.open(ResetComponent);
  }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
        username : new FormControl(null, Validators.required),
        password : new FormControl(null, Validators.required),
        business : new FormControl(null, Validators.required),
        token : new FormControl(null, Validators.required)
    });
  }
  

  onSubmit(): void {
    this.isSubmitted = true;
    this.credentialsError = this.checkCredentials();  // set the credentials error

    if (this.loginForm.valid && !this.credentialsError) { // check also the credentials
      console.log(this.loginForm.value);
      this.loginForm.reset();
      this.isSubmitted = false;
    } else {
      console.log("Submission Fail");
     
      this.isSubmitted = true;
    }
  }
  
  // checks if the input credentials are wrong
  checkCredentials() {
    return !(this.loginForm.get('username').value === 'user1' 
        && this.loginForm.get('password').value === 'user1'
        && this.loginForm.get('business').value === 'user1'
        && this.loginForm.get('token').value === 'user1');
  }
  
  

  // add this helper function to check if all form fields are filled
  areFieldsEmpty() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    const business = this.loginForm.get('business').value;
    const token = this.loginForm.get('token').value;

    return this.isSubmitted && (!username || !password || !business || !token);
  }
}
