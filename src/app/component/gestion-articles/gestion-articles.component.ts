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
  categorie!:Categorie;
  articles!:Article[];
  article!:Article;
  selectedFile!: File;
  idArt!:string;
  nomArt!:string;
  prixart!:string;
  qtdispo!:string;
  nomcatego!:string;

 
constructor(private articleServe:ArticleService, private catServe:CategorieService, private gestioUpload:GestionUploadService) {}

  ngOnInit(): void {
    this.categorie = new Categorie();
    this.article = new Article();
   
    this.afficherArticles();
    this.idArt="0";
  }

  selectEvent(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ajouterArtavceimg()
  {
    console.log(this.selectedFile.name);
    console.log(this.selectedFile.size)
    
   let formData = new FormData();
    formData.append("idArt", this.idArt);
    formData.append("nomArt", this.nomArt);
    formData.append("prix", this.prixart);
    formData.append("qtdispo", this.qtdispo);
    formData.append("nomcatego", this.nomcatego);
    formData.append("image", this.selectedFile);    
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

  getNomCatbyArtId(id:number):any{
   this.articleServe.getCatByArtId(id).subscribe(
    response =>
    {
      let nomcat = response;
      
      return nomcat
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
        this.idArt= this.article.idarticle.toString();
        this.nomArt = this.article.nomarticle;
        this.prixart = this.article.prix.toString();
        this.qtdispo = this.article.qtedispo.toString();
      }
    )
  }
//marche pas cart contrainte clef categorie
  supprimerById(idArt:number){
    this.articleServe.suprArticle(idArt).subscribe(
      response => { this.afficherArticles();}
    )
  }

  remiseaZeroArt(){
    this.article = new Article ();
  }

  

}
