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
      {name: "Alexandre Chastan", pseudo: "alexandre", password: "chastan"},
    );
  }

  getUserByPseudo(pseudo){

    for(let user of this.users){
      if(user.pseudo === pseudo ){
        this.name = user.name;
        return user
      }
    }
    return null;
  }
}
