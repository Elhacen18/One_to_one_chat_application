import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


class User {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    aboutMe?: string;

}
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  currentLoggedUser = new BehaviorSubject<User>(new User());
  userchatlist = new BehaviorSubject<any[]>([
  {
    id: 1,
    firstName: 'Christopher',
    lastName: 'Campbell',
    lastMessage: 'In front of the bar, about which we had a call.',
   
  },
  {
    id: 2,
    firstName: 'Houcine',
    lastName: 'Ncib',
    lastMessage: 'What do you have planned this weekend?',
    
  },
  {
    id: 3,
    firstName: 'Kelly',
    lastName: 'Slikerno',
    lastMessage: 'How would you describe yourself?',
  },
  {
    id: 4,
    firstName: 'Ethan',
    lastName: 'Hoover',
    lastMessage: 'How do you relieve stress?',
  },
  {
      id: 5,
      firstName: 'Joseph ',
      lastName: 'Pearson',
    lastMessage: "What's your zodiac sign?",
  },
  {
    id: 6,
    firstName: 'Vicky ',
    lastName: 'Hladynets',
    lastMessage: 'What was your first concert?',
  },
  {
    id: 7,
    firstName: 'Sarah ',
    lastName: 'Andrews',
    lastMessage: 'Do you collect anything?',
  },
  {
    id: 8,
    firstName: 'David',
    lastName: 'Okuniev',
    lastMessage: 'What is your dream job?',
  }]);  
  getcurrentLoggedUser(): Observable<User> {
    return this.currentLoggedUser.asObservable();
  }
  setcurrentLoggedUser(user: User) {
    this.currentLoggedUser.next(user);
  }
  constructor() { }
  // get users chat list for currently logged in user
   setUserList(userList: any) {
      this.userchatlist.next(userList);
    }
    getUserList(): Observable<any> {
      return this.userchatlist.asObservable();
    }

  // CityWeather = new BehaviorSubject<WeatherModel>();
}
