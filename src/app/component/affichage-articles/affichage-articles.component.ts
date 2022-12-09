import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categorie';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-affichage-articles',
  templateUrl: './affichage-articles.component.html',
  styleUrls: ['./affichage-articles.component.css']
})
export class AffichageArticlesComponent implements OnInit {
 
   articles!:Article[];
   categories!:Categorie[];
   mapcat!:string;
 
constructor(private articleServe:ArticleService,private catServe:CategorieService ) {}

  ngOnInit(): void {
    this.afficherArticles();
  }

  afficherArticles(){
    console.log("afficherartickle")
    this.articleServe.getArticles().subscribe(
      response =>
      {
        this.articles = response
      }
    )
  }

  /*getNomcategorie(){
    this.catServe.getCategorie().subscribe(
      res=> {
        this.categories=res;        
      }
    )
  }*/

  
}
