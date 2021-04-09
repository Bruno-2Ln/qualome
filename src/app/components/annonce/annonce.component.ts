import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Annonce } from 'src/app/interfaces/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit, OnDestroy {

  annonces: Array<Annonce>;
  subscription: Subscription;
  pictures: Array<string>;

  constructor(
    private annonceService: AnnonceService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.annonceService.getAnnonces()
    .subscribe
    (data => 
      (this.annonces = data,
        this.pictures = this.getFirstPicture(this.annonces),
        console.log(this.pictures)
        
        ));
  }

  /**
   * Fonction permettant de récupérer un tableau regroupant
   * la première photo de chaque données du tableau en paramètre.
   * @param data 
   * @returns 
   */
  getFirstPicture(data: Array<any>) {
    let array = []
    for (let i = 0; i < data.length; i++){
      if(data[i].pictures != null && data[i].pictures.length > 0){
        array.push(data[i].pictures[0])
      } else {
        array.push("https://via.placeholder.com/100")
      }
    }
      return array;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
