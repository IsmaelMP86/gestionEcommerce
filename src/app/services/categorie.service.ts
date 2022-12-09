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

  getAllCategorie(){
    return this.http.get<Categorie[]>('http://localhost:8030/api/categories/')    
  }

  getCategoById(id:number){
    return this.http.get<Categorie>(`http://localhost:8030/api/categories/${id}`)    
  }

  deleteCategorieById(id:number){
    return this.http.delete(`http://localhost:8030/api/categories/${id}`)
  }

  addCategorie(cat:Categorie){
    return this.http.post('http://localhost:8015/api/categories/', cat);
  }
}
