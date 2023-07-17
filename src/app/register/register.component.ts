import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  passwordFocused: boolean = false;

  @ViewChild('businessInput', { static: false }) businessInput!: ElementRef;

  ngOnInit() {
    this.registerForm = new FormGroup({
      'business':new FormControl(null,[Validators.required]),
      'username': new FormControl(null, [Validators.required, this.notOnlyNumber]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'password': new FormControl(null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
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
      //console.log(this.registerForm.value);
      console.log("success");
      this.registerForm.reset();
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
  

}