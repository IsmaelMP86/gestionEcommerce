import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService  {

  constructor(private http:HttpClient) { }

  getCategoByArtId(id:number){
    return this.http.get<Categorie>(`http://localhost:8030/api/catfromArtId/${id}`)    
  }
}
