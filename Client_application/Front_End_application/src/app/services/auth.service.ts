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
    // added 'any' type to avoid type error: token not found on type object
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }
  loginUser(loginData:Login ) {
    // added 'any' type to avoid type error: token not found on type object
    return this.http.post<any>(`${this.apiUrl}/login`, loginData)
    ;

  }
  
  


}
