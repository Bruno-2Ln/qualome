import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})
export class AuthViewComponent implements OnInit {

  authForm: FormGroup;

  errorMsg: string;

  constructor( 
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.authForm = this.formBuilder
    .group({
      'username': ['alexandre', [Validators.required]],
      'mdp': ['chastan', [Validators.required]],
    })
  }

  onSubmitSignIn(): void {
    let username = this.authForm.value.username;
    let mdp = this.authForm.value.mdp;

    this.authService.signIn(username, mdp)
    .then(() => {
      this.router.navigate(['accueil']);
    })
    .catch((err) => {
      this.errorMsg = err;

    })

  }

}
