import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any[];
  user: any;
  name: any;

  constructor() {

    this.users = [];

    this.users.push(
      {name: "Bruno Delaine", pseudo: "bruno", password: "bruno"},
      {name: "Alexandre Chastan", pseudo: "alexandre", password: "chastan"},
      {name: "Happy Monkey", pseudo: "happy", password: "monkey"},
    );
  }

  getUserByPseudo(pseudo){

    for(const user of this.users){
      if(user.pseudo === pseudo ){
        this.name = user.name;
        return user
      }
    }
    return null;
  }
}
