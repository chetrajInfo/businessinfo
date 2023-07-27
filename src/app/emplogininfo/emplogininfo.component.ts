import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-emplogininfo',
  templateUrl: './emplogininfo.component.html',
  styleUrls: ['./emplogininfo.component.css']
})
export class EmplogininfoComponent {
  employeeForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    empid: new FormControl('',Validators.required),
    address: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    department: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(''),
    hireDate: new FormControl(''),
    employmentStatus: new FormControl(''),
    socialnum: new FormControl(''),
    idcard: new FormControl(''),
    salary: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.employeeForm.value);
  }

}
