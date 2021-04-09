import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Annonce } from 'src/app/interfaces/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annonce-view',
  templateUrl: './annonce-view.component.html',
  styleUrls: ['./annonce-view.component.scss']
})
export class AnnonceViewComponent implements OnInit {

  annonces: Array<Annonce>;
  annonce: any;

  id: Number;
  subscription: Subscription;

  constructor(
    private annonceService: AnnonceService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.annonceService.getAnnonces()
    .subscribe
    (data => (
              this.annonces = data,
              this.id = +this.route.snapshot.params['id'],
              this.annonce = this.getAnnonce(this.annonces, this.id)
              )
            )
          }

  getAnnonce(data, id) {
    for (let i = 0; i <= data.length; i++){
      if (data[i].id == id){
        return data[i];
      }
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
