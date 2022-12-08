import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-gestion-articles',
  templateUrl: './gestion-articles.component.html',
  styleUrls: ['./gestion-articles.component.css']
})
export class GestionArticlesComponent implements OnInit {
 
  articles!:Article[];
  article!:Article;
 
constructor(private articleServe:ArticleService) {}

  ngOnInit(): void {
    this.article = new Article();
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

  ajouterArt()
  {
    this.articleServe.addArticle(this.article).subscribe(
      response=> { 
        console.log(this.article.nomarticle)
        this.afficherArticles();
      }
    )
  }

  afficherrArtById(idart:number){
    this.articleServe.getArticlebyId(idart).subscribe(
      response => {
        this.article = response
      }
    )
  }

  remiseaZeroArt(){
    this.article = new Article ();
  }

}
