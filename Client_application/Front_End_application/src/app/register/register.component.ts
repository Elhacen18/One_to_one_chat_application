import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatToolbarModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit  {
  registerForm!: FormGroup; 

  constructor(private router: Router, private formBuilder: FormBuilder,private authService: AuthService) { }
  // registerForm = this.formBuilder.group({
  //   username: new FormControl(''),
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   // role: new FormControl('user')
  // });
  ngOnInit() {
   
    this.registerForm = this.formBuilder.group({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    // role: new FormControl('user')
  });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.authService.registerUser(userData).subscribe(response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
        
      });
    }
  }


}