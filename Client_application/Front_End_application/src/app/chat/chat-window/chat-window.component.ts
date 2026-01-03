import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {

}
