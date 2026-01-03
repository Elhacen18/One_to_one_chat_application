import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../Model/application-user';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  apiUrl = 'https://localhost:7138/api/Auth/register';
  constructor(private http: HttpClient) { }
  registerUser(userData: ApplicationUser) {
    return this.http.post(`${this.apiUrl}`, userData);
  }
}
