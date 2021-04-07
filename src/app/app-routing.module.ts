import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnoncesViewComponent } from './views/annonces-view/annonces-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

const routes: Routes = [
  {path: '', component: AnnoncesViewComponent},
  {path: 'accueil', component: AnnoncesViewComponent},
  {path: 'not-found', component: ErrorViewComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
