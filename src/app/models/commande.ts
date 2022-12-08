import { Lignecommande } from "./lignecommande";
import { Utilisateur } from "./utilisateur";

export class Commande {
    idcommande!:number;
	datecommande!:Date;
	montantTTC!:number;
	lignescommande!:Lignecommande[];
	utilisateur!:Utilisateur;
}
