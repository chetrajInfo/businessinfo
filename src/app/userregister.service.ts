import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
  [x: string]: any;
  private urlBase = "http://localhost:8080/adduser";

  constructor(private httpClient: HttpClient) {

   }

   createNewUser(newUser:Object): Observable <Object> {

       return this.httpClient.post(`${this.urlBase}`, newUser);
   }
}
