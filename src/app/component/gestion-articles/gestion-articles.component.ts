import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categorie';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { GestionUploadService } from 'src/app/services/gestion-upload.service';

@Component({
  selector: 'app-gestion-articles',
  templateUrl: './gestion-articles.component.html',
  styleUrls: ['./gestion-articles.component.css']
})
export class GestionArticlesComponent implements OnInit {
 
  articles!:Article[];
  article!:Article;
  categorie!:Categorie;
  selectedFile!: File;
 
constructor(private articleServe:ArticleService, private catServe:CategorieService, private gestioUpload:GestionUploadService) {}

  ngOnInit(): void {
    this.categorie = new Categorie();
    this.article = new Article();
    this.afficherArticles();
  }

  selectEvent(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ajouterArtavceimg()
  {
    console.log(this.selectedFile.name);
    console.log(this.selectedFile.size)
    console.log(this.article.nomarticle)
    let formData = new FormData();
    formData.append("image", this.selectedFile);
    //creer un objet article avec tt ce qui est pas immage et append(article)
    formData.append("nomarticle", this.nom);




    this.gestioUpload.saveFile(formData).subscribe(res => {
      console.log("ok");
    

    },
    
    err=>
    {
      console.log(err.message);
    })
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
        this.catServe.getCategoByArtId(idart).subscribe(
          response2 => {this.categorie = response2 
          console.log(this.categorie.nomcategorie)}
        )
      }
    )
  }

  remiseaZeroArt(){
    this.article = new Article ();
  }

  

}
