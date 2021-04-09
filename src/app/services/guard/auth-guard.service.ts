import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
isAuth: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.isAuth = this.authService.isAuth;
    console.log(this.isAuth);
}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.authService.isAuth);
    return new Promise(
      (resolve, reject) => {
        if(this.authService.isAuth){
        resolve(true);
        } else {
        this.router.navigate(['/auth']);
        resolve(false);
        }
      }
    )
  }

}
