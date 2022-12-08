import { Lignepanier } from "./lignepanier";
import { Utilisateur } from "./utilisateur";

export class Panier {
    idpanier!:number;
	date!:Date;
	lignespanier!:Lignepanier[];
	utilisateur!:Utilisateur;
}
