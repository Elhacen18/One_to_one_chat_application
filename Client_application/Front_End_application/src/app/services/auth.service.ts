import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../Model/application-user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }
  apiUrl = 'https://localhost:7138/api/Auth/register';

  registerUser(userData: ApplicationUser) {
    return this.http.post(`${this.apiUrl}`, userData);
  }


}
