import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-gestoin-categorie',
  templateUrl: './gestoin-categorie.component.html',
  styleUrls: ['./gestoin-categorie.component.css']
})
export class GestoinCategorieComponent implements OnInit {

  categorie!:Categorie;
  categories!:Categorie[];

  ngOnInit(): void {
    this.getAllCategorie();
    this.categorie = new Categorie();
  }

  constructor (private catServ:CategorieService) {}

  getAllCategorie(){
    this.catServ.getAllCategorie().subscribe(
      resp => {
        console.log(resp)
       this.categories = resp 
      }
    )
  }

  getCategoriebyId(id:number){
    this.catServ.getCategoById(id).subscribe(
      resp => {this.getAllCategorie()}
    )
  }

  deleteCatById(id:number){
    this.catServ.deleteCategorieById(id).subscribe(
      resp => {this.getAllCategorie()}
    )
  }

  ajouteruneCat(){
    this.catServ.addCategorie(this.categorie).subscribe
  }

  remiseaZeroCat(){
    this.categorie=new Categorie();
  }

  
}
