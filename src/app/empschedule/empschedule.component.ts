import { Component } from '@angular/core';
import { EmployeeSchedule } from './employee-schedule.model'; // Import the EmployeeSchedule model

@Component({
  selector: 'app-empschedule',
  templateUrl: './empschedule.component.html',
  styleUrls: ['./empschedule.component.css']
})
export class EmpscheduleComponent {
  // Array to hold the days of the week
  daysOfWeek: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Array to hold the employee schedule data
  employees: EmployeeSchedule[] = [];
  showPlusButton = true;

 addEmployee() {
    const newEmployee: EmployeeSchedule = {
      name: '',
      employee: '',
      schedule: {
        Mon: '',
        Tue: '',
        Wed: '',
        Thu: '',
        Fri: '',
        Sat: '',
        Sun: ''
      }
    };
    this.employees.push(newEmployee);
  }
 
  // Function to check if the employee schedule is non-empty
  hasNonEmptySchedule(schedule: any): boolean {
    return Object.values(schedule).some(day => day !== '');
  }

    // Function to remove an employee row
    removeEmployee(index: number) {
      this.employees.splice(index, 1);
    }
  
  // Function to handle form submission and save the schedule data
  onSubmit() {
    // Implement your HTTP POST request to send the schedule data to the backend and save it to the database
    // You can use Angular's HttpClient or any other HTTP library to make the request
    // Example:
    // this.http.post<any>('https://your-api-url/save-employee-schedule', this.employees).subscribe(
    //   (response) => {
    //     // Handle the response, e.g., show success message, refresh the schedule, etc.
    //   },
    //   (error) => {
    //     // Handle the error, e.g., show error message, log the error, etc.
    //   }
    // );
  }

}
