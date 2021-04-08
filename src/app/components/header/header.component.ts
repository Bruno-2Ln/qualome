import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Annonce } from 'src/app/interfaces/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  annonces : Array<Annonce>;
  name : string;
  nbrAnnonces : number;
  subscription: Subscription;

  constructor(
    private annonceService: AnnonceService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.annonceService.getAnnonces()
    .subscribe
    (data => 
      (this.annonces = data,
        this.nbrAnnonces = this.annonces.length
        ));
        
    this.name = this.userService.name;
  
  }

}
