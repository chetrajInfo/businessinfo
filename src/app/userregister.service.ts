import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
  //[x: string]: any;
  private urlBase = "http://localhost:8080/adduser";

  constructor(private httpClient: HttpClient) {}



   createNewUser(newUser:Object): Observable <Object> {

       return this.httpClient.post(`${this.urlBase}`, newUser);
   }




   checkCredentials(username: string, password: string, business: string, id: number): Observable<boolean> {
    // Modify the URL as per your backend endpoint for checking credentials
    const url = 'http://localhost:8080/api/checkCredentials';
  
    // Create the request payload
    const credentials = { username, password, business, id };
  
    // Send the POST request to the backend API
    return this.httpClient.post<boolean>(url, credentials);
  }
  
}
