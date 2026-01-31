import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() message!: { messag: string; id: number };
  @Input() isMine = false;
// Messages  = [{messag:'Hello! How can I help you today?',
//   id:10
// }, 

// {messag:'What are your operating hours?',
//   id:12
// },
// {messag:'What are your operating hours?',
//   id:13
// },
// {messag:'What are your operating hours?',
//   id:14
// },
// {messag:'What are your operating hours?',
//   id:15
// },
// {messag:'What are your operating hours?',
//   id:16
// },

// {messag:'Do you offer international shipping?',
//   id:17
// }];

}
