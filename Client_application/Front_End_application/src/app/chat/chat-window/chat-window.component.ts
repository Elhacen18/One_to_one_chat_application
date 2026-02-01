import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedserviceService } from '../../services/sharedservice.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [MessageComponent, CommonModule, FormsModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent implements OnInit {
  constructor(private sharedService: SharedserviceService) { }
  messages:any;
  selectedUserId: number = 0;
  selectedUser:any;
  
  ngOnInit(): void {
    const selectedUser = this.sharedService.getSelectedUser().subscribe(user => {
      console.log('Selected user in ChatWindowComponent subscription:', user);
      this.selectedUser = user;
      this.messages = user.Messages;
      // this.selectedUserId = user.id;
      console.log('Messages:', this.messages);
      // pass this infor to message component
      
    });
    // if (selectedUser) {
    //   console.log('Selected user in ChatWindowComponent:', selectedUser);
    //   console.log('Messages:', selectedUser.Messages);
    //   this.messages = selectedUser.Messages;
    // }
  }
//   currentUserId = 50;
//  text = '';
//    sendMessage() {
//     const v = this.text.trim();
//     if (!v) return;

//     this.Messages.push({ messag: v, id: this.currentUserId });
//     this.text = '';
//   }


}
