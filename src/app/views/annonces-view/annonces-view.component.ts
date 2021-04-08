import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/interfaces/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annonces-view',
  templateUrl: './annonces-view.component.html',
  styleUrls: ['./annonces-view.component.scss']
})
export class AnnoncesViewComponent implements OnInit {

  annonces: Array<Annonce>;

  constructor() { }

  ngOnInit(): void {
  }

}
