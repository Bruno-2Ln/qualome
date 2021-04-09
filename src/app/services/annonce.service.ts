
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../interfaces/annonce';



@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  url: string = "https://bitbucket.org/!api/2.0/snippets/happy-monkey/4XK6Ga/05bd2fd06fb6a6b5c823eb67d5dc6175b9560421/files/listing"
  
  constructor(
    private http: HttpClient,
  ) {}

  /**
   * Fonction permettant de retourner les données.
   * @returns 
   */
  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.url)
  }





}
