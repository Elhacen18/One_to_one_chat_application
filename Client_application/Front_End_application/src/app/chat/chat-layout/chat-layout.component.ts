import { Component } from '@angular/core';
import { NavBarComponent } from '../../navBar/nav-bar.component';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { ConversationHeaderComponent} from '../conversation-header/conversation-header.component';
import { MatDividerModule } from '@angular/material/divider';   
@Component({
  selector: 'app-chat-layout',
  standalone: true,
  imports: [NavBarComponent, ConversationHeaderComponent, ChatListComponent, ChatWindowComponent, MatDividerModule],
  templateUrl: './chat-layout.component.html',
  styleUrl: './chat-layout.component.css'
})
export class ChatLayoutComponent {

  constructor() { }
  

}
