import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users = [
      {
      firstName: 'Dominik',
            lastName: 'Alkhovik',
            email: 'dominik.alk@hotmail.com',
            isActive: true,
            registered: new Date('01/02/2018 08:30:00'),
            hide: true
      },
      {
        firstName: 'Harsh',
              lastName: 'Patel',
              email: 'harsh@yahoo.co.uk',
              isActive: false,
              registered: new Date('03/11/2017 09:30:10'),
              hide: true
        },
      {
        firstName: 'Roger',
              lastName: 'Federer',
              email: 'Roger@gmail.com',
              isActive: true,
              registered: new Date('03/07/2008 01:40:00'),
              hide: true
        }
    ];
  }

  getData(){
    this.data = new Observable(observer => { 
      setTimeout(() => {
        observer.next(1);
      }, 1000)

      setTimeout(() => {
        observer.next(2);
      }, 2000)

      setTimeout(() => {
        observer.next(3);
      }, 3000)

      setTimeout(() => {
        observer.next(4);
      }, 4000)
    });

    return this.data;
  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }

  addUser(user: User){
    this.users.unshift(user);
  }

}
