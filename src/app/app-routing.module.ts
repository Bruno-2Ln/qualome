import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { AnnoncesViewComponent } from './views/annonces-view/annonces-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

const routes: Routes = [
  {path: 'auth', component: AuthViewComponent},
  {path: '', canActivate:[AuthGuardService],  component: AnnoncesViewComponent},
  {path: 'accueil', canActivate:[AuthGuardService],  component: AnnoncesViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
