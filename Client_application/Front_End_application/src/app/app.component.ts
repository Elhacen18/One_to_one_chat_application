import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { RegisterComponent } from './Register/register/register.component';
// import { LoginComponent } from './login/login/login.component';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front_End_application';
}
