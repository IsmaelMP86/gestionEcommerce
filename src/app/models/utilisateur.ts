import { Commande } from "./commande";
import { Panier } from "./panier";
import { Role } from "./role";

export class Utilisateur {
    idutilisateur!:number;
	nom!:string;
	prenom!:string;
	mail!:string;
	age!:number;
	login!:string;
	password!:string;
	roles!:Role[];
	commandes!:Commande[];
	panier!:Panier;
}
