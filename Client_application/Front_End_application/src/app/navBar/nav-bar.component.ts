import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatDivider } from '@angular/material/divider'; 
import {MatChipsModule} from '@angular/material/chips';
import { SharedserviceService } from '../services/sharedservice.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
 
  
  constructor(private sharedService: SharedserviceService, private router: Router) { }
  // currentLoggedUser = this.sharedService.currentLoggedUser;
  fullName = '';
  initials = '';

  ngOnInit() {
    this.sharedService.currentLoggedUser.subscribe(user => {
      this.fullName = `${user.firstName} ${user.lastName}`;
      this.initials = this.fullName.split(' ').map(n => n[0]).join('');
    });
  }
  logout() {

    // Implement logout functionality here
    localStorage.removeItem('Token');
    // this.sharedService.setcurrentLoggedUser(new User(""));
    this.router.navigate(['/login']);
  }
}
