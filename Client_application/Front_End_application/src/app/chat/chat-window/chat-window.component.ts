import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [MessageComponent, CommonModule, FormsModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  
  currentUserId = 50;
 text = '';

  Messages = [
    { messag: 'Hello! How can I help you today?', id: 10 },
    { messag: 'What are your operating hours?', id: 50 },
    { messag: 'Do you offer international shipping?', id: 17 },
    { messag: 'What are your operating hours?', id: 12 },
    { messag: 'What are your operating hours?', id: 13 },
    { messag: 'What are your operating hours?', id: 14 },
    { messag: 'What are your operating hours?', id: 15 },
    { messag: 'What are your operating hours?', id: 16 }
  ];
   sendMessage() {
    const v = this.text.trim();
    if (!v) return;

    this.Messages.push({ messag: v, id: this.currentUserId });
    this.text = '';
  }


}
