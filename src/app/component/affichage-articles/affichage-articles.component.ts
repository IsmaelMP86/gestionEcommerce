import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-affichage-articles',
  templateUrl: './affichage-articles.component.html',
  styleUrls: ['./affichage-articles.component.css']
})
export class AffichageArticlesComponent implements OnInit {
 
  articles!:Article[];
 
constructor(private articleServe:ArticleService) {}

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


}{

}
