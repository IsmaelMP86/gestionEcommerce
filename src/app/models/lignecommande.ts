import { Article } from "./article";
import { Commande } from "./commande";

export class Lignecommande {
    idlignecommande!:number;
	qtelignecommande!:number;
	commande!:Commande;
	article!:Article;
	
}
