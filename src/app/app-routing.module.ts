import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { AnnonceViewComponent } from './views/annonce-view/annonce-view.component';
import { AnnoncesViewComponent } from './views/annonces-view/annonces-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

const routes: Routes = [
  {path: 'auth', component: AuthViewComponent},
  {path: '', component: AnnoncesViewComponent},
  {path: 'accueil', component: AnnoncesViewComponent},
  {path: 'annonce/:id', component: AnnonceViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
