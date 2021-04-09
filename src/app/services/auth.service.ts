import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;
  name: string;
  constructor(
    private userService: UserService,
  ) { }

  signIn(username: string, password: string) {
    return new Promise((resolve, reject) => {
      //juste pour simuler un temps d'attente pour la récupération
      setTimeout(() => {

        let user = this.userService.getUserByPseudo(username)
        
        if (user) {
          if(user.password === password) {
            this.isAuth = true;
            this.name = user.name
            console.log(this.isAuth);
            
            resolve(this.isAuth);
            resolve(this.name);
          }
          reject("Le mot de passe est erroné")
        }
        reject("Le pseudo n'existe pas")
      }, 1000)
    })
  }

  signOut() {
    this.isAuth = false;
  }
}
