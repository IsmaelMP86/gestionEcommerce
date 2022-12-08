import { Categorie } from "./categorie";

export class Article {
    idarticle!:number;
	nomarticle!:string;
	prix!:number;
	qtedispo!:number;
	categorie!:Categorie;
	image!:string; 
}
