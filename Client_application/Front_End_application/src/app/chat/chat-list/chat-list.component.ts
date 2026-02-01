import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedserviceService } from '../../services/sharedservice.service';
import { OnInit } from '@angular/core';
import { User } from '../../Model/user';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent implements OnInit {

  constructor(private sharedService: SharedserviceService) { }
  users:any

  ngOnInit() {

    this.sharedService.getUserList().subscribe((data:User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }
  
  selectUser(user: any) {
    console.log('Selected user:', user);
    this.sharedService.setSelectedUser(user);
  }
  
//   users = [
//     {
//       id: 1,
//       firstName: 'Christopher',
//     lastName: 'Campbell',
//     lastMessage: 'In front of the bar, about which we had a call.',
//     time: '2:55 PM',
//   },
//   {
//     id: 2,
//     firstName: 'Houcine',
//     lastName: 'Ncib',
//     lastMessage: 'What do you have planned this weekend?',
//     time: '2:41 PM'
//   },
//   {
//     id: 3,
//     firstName: 'Kelly',
//     lastName: 'Slikerno',
//     lastMessage: 'How would you describe yourself?',
//     time: '1:18 PM'
//   },
//   {
//     id: 4,
//     firstName: 'Ethan',
//     lastName: 'Hoover',
//     lastMessage: 'How do you relieve stress?',
//     time: 'Yesterday'
//   },
//   {
//     id: 5,
//     firstName: 'Joseph ',
//     lastName: 'Pearson',
//     lastMessage: "What's your zodiac sign?",
//     time: 'Yesterday'
//   },
//   {
//     id: 6,
//     firstName: 'Vicky ',
//     lastName: 'Hladynets',
//     lastMessage: 'What was your first concert?',
//     time: 'Mon'
//   },
//   {
//     id: 7,
//     firstName: 'Sarah ',
//     lastName: 'Andrews',
//     lastMessage: 'Do you collect anything?',
//     time: 'Sun',
//   },
//   {
//     id: 8,
//     firstName: 'David',
//     lastName: 'Okuniev',
//     lastMessage: 'What is your dream job?',
//     time: 'Sat'   
//   }
// ];

}