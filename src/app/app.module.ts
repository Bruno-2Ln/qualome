import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnnoncesViewComponent } from './views/annonces-view/annonces-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnoncesViewComponent,
    ErrorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
