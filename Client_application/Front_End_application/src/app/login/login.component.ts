import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
  
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCardModule, MatCheckboxModule, MatButtonModule, MatIconModule, MatToolbarModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform!:FormGroup // temporary fix 
  
  constructor(private router: Router, private formBuilder: FormBuilder,private authService: AuthService) { }
  
  ngOnInit() {
    this.loginform = this.formBuilder.group({
      userName: [''],
      password: ['']
    });
  }
  onSubmit() {
    if (this.loginform.valid) {
      const credentials = this.loginform.value;
      // console.log(credentials);
      // I was missing controlformname in the html input fields for loginform 
      this.authService.loginUser(credentials).subscribe(response => {
        console.log('Login successful', response);
        this.router.navigate(['/chat-layout']);
      });
    }
  }


}
