import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../Model/application-user';
import { Login } from '../Model/login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }
  apiUrl = 'https://localhost:7138/api/Auth';
  // apiUrlLogin = 'https://localhost:7138/api/Auth/login';
  registerUser(userData: ApplicationUser) {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }
  loginUser(loginData:Login ) {
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
  


}
