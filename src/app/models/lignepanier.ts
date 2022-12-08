import { Article } from "./article";
import { Panier } from "./panier";

export class Lignepanier {
    idlignepanier!:number;
	qte!:number;
	article!:Article;
	panier!:Panier;
}
