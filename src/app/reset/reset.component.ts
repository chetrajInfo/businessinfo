import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  email!: string;
  token!:string;

  constructor(private dialogRef: MatDialogRef<ResetComponent>) {}

  sendResetInstructions(): void {
    // Here, you would usually call a service that handles sending the reset email.
    console.log(`Reset instructions sent to ${this.email}`);
    
    // Close the dialog
    this.dialogRef.close();
  }

  
}
