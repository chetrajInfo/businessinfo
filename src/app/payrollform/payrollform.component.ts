import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-payrollform',
  templateUrl: './payrollform.component.html',
  styleUrls: ['./payrollform.component.css']
})
export class PayrollformComponent implements OnInit {

  payrollForm = this.fb.group({
    employeeId: ['', Validators.required],
    employeeName: ['', Validators.required],
    salary: ['', Validators.required],
    allowances: [''],
    deductions: [''],
    fromDate: ['', Validators.required],
    //toDate: ['', Validators.required],
    image: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const imageControl = this.payrollForm.get('image');
      if (imageControl) {
        imageControl.setValue(file);
      } else {
        console.error('Image control does not exist!');
      }
    }
  }
  

  onSubmit(): void {
    // Process payroll data here
    const formData = new FormData();
    Object.keys(this.payrollForm.controls).forEach(key => {
      const control = this.payrollForm.get(key);
      if (control && control.value != null) {
        formData.append(key, control.value);
      }
    });
  
    console.log(formData);
  }
  
  
}