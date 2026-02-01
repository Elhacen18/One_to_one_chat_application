import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatDivider } from '@angular/material/divider'; 
import {MatChipsModule} from '@angular/material/chips';
import { SharedserviceService } from '../../services/sharedservice.service';

@Component({
  selector: 'app-conversation-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './conversation-header.component.html',
  styleUrl: './conversation-header.component.css'
})
export class ConversationHeaderComponent {
  fullName = '';
  initials = this.fullName.split(' ').map(n => n[0]).join('');
  constructor(private sharedService: SharedserviceService) { }

  ngOnInit() {
    this.sharedService.getSelectedUser().subscribe(user => {
      this.fullName = `${user.firstName} ${user.lastName}`;
      this.initials = this.fullName.split(' ').map(n => n[0]).join('');
    });
  }
}
