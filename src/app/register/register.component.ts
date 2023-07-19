import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserregisterService } from '../userregister.service';
import { UserRegister } from '../user-register.model';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // [x: string]: any;

  userRegister : UserRegister = new UserRegister();

  constructor(private userregister: UserregisterService, private router: Router) { }

  registerForm!: FormGroup;
  passwordFocused: boolean = false;
  invalidEmail:boolean = false;

  @ViewChild('businessInput', { static: false }) businessInput!: ElementRef; //this code is used to make the business filed text to uppercas

  ngOnInit() {
    this.registerForm = new FormGroup({
      'business':new FormControl(null,[Validators.required]),
      'username': new FormControl(null, [Validators.required, this.notOnlyNumber]),
      'email': new FormControl(null, [Validators.required, Validators.email, this.emailValidator]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'pass': new FormControl(null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      'agree': new FormControl(null ,[Validators.required]) //when declare true on place of null it will automatically check the checkbox in form
    });
  }
  
  @HostListener('focusout', ['$event.target'])
  onFocusout(target: any) {
    if (target.id === 'business') {
      this.registerForm.get('business')?.setValue(this.businessInput.nativeElement.value.toUpperCase());
    }
  }


  notOnlyNumber(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!isNaN(value)) {
      return { onlyNumber: true };
    }
    return null;
  }


  onSubmit() {

  // your form submission code here
  if (this.registerForm.valid) {
    this.userregister.createNewUser(this.registerForm.value).subscribe(
      (response: any) => {
        this.registerForm.reset();
        this.router.navigate(["/"]);
      },
      ( error: any) => {
        console.log(error); // handle HTTP error
      }
    );
  }
  else {
    alert("All Field/s must be filled");
  }
}


  emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    /* Regular expression for email validation */
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  
    if (!emailPattern.test(value)) {
      return { 'invalidEmail': true };
    }
    return null;
  }

  //this will check the checkbox is clicked or not if clicked the button will be undable if not button will be disable
  onCheckboxChange(e:any) {
    const agreeControl = this.registerForm.get('agree');
    if (e.target.checked) {
      agreeControl?.setValue(true);
    } else {
      agreeControl?.setValue(null);
    }
  }
  
}