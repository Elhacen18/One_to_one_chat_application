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
  // logged in user's chat list ;fake data for now
  selectedUser = new BehaviorSubject<User>(new User());

  userchatlist = new BehaviorSubject<any[]>([
  {
    id: 1,
    firstName: 'Christopher',
    lastName: 'Campbell',
    Messages: [ 'In front of the bar, about which we had a call.','Hello, how are you?','Are we still meeting tomorrow?'],
   
  },
  {
    id: 2,
    firstName: 'Houcine',
    lastName: 'Ncib',
    Messages: [ 'What do you have planned this weekend?','I was thinking of going hiking.','That sounds fun!'],
    
  },
  {
    id: 3,
    firstName: 'Kelly',
    lastName: 'Slikerno',
    Messages: [ 'How would you describe yourself?','I am a friendly and outgoing person.','I enjoy meeting new people and making connections.'],
  },
  {
    id: 4,
    firstName: 'Ethan',
    lastName: 'Hoover',
    Messages: [ 'How do you relieve stress?','I usually go for a walk or listen to music.','That helps a lot.'],
  },
  {
      id: 5,
      firstName: 'Joseph ',
      lastName: 'Pearson',
    Messages: [ "What's your zodiac sign?", "I'm a Sagittarius."],
  },
  {
    id: 6,
    firstName: 'Vicky ',
    lastName: 'Hladynets',
    Messages: [ 'What was your first concert?','I went to my first concert when I was 12 years old.'],
  },
  {
    id: 7,
    firstName: 'Sarah ',
    lastName: 'Andrews',
    Messages: [ 'Do you collect anything?','I collect vintage postcards and stamps.'],
  },
  {
    id: 8,
    firstName: 'David',
    lastName: 'Okuniev',
    Messages: [ 'What is your dream job?','I want to be a software engineer.'],
  }]);  
  getcurrentLoggedUser(): Observable<User> {
    return this.currentLoggedUser.asObservable();
  }
  setcurrentLoggedUser(user: User) {
    this.currentLoggedUser.next(user);
  }
  constructor() { }
  // get users chat list for currently logged in user
  getUserList(): Observable<any> {
    return this.userchatlist.asObservable();
  }
   setUserList(userList: any) {
      this.userchatlist.next(userList);
    }
   getSelectedUser(): Observable<any> {
    return this.selectedUser.asObservable();
  }
    setSelectedUser(user: User) {
    this.selectedUser.next(user);
  }

  // CityWeather = new BehaviorSubject<WeatherModel>();
}
