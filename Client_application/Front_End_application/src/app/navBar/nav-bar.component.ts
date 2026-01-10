import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatDivider } from '@angular/material/divider'; 
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  fullName = 'Elhacen Boudlal';
  initials = this.fullName.split(' ').map(n => n[0]).join('');
  
}
