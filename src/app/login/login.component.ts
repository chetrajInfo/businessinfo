import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  isSubmitted: boolean = false;  // add this line

  constructor(){}
  
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
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginForm.reset();
      // If you want to hide the error message after a successful submission
      // you could reset isSubmitted here as well
      this.isSubmitted = false;
    } else {
      console.log("Submission Fail");
      this.isSubmitted = true;
    }
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
