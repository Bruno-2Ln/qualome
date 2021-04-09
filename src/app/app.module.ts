import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnnoncesViewComponent } from './views/annonces-view/annonces-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnnonceViewComponent } from './views/annonce-view/annonce-view.component';
import { Menu2Component } from './components/menu2/menu2.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnoncesViewComponent,
    ErrorViewComponent,
    AnnonceComponent,
    SearchComponent,
    HeaderComponent,
    MenuComponent,
    AuthViewComponent,
    LogoComponent,
    AnnonceViewComponent,
    Menu2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
