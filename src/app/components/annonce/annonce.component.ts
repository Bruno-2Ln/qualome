import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Annonce } from 'src/app/interfaces/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit, OnDestroy {

  annonces: Array<Annonce>;
  subscription: Subscription;
  constructor(
    private annonceService: AnnonceService
  ) { }

  ngOnInit(): void {
    this.subscription = this.annonceService.getAnnonces()
    .subscribe
    (data => 
      (this.annonces = data,
        console.log(this.annonces)
        ));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
