import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { Utilisateur } from 'src/app/models/utilisateur';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
a!:number;
user!:Utilisateur;
//roleusers!:Role[];
nomroleuser!:string[];


  ngOnInit(): void {
    //juste pour se rappeler des test if a faire selon connection et role
    this.a=3;

    if(sessionStorage.getItem('user')){
      this.user = JSON.parse(sessionStorage.getItem('user') ?? "");
      this.router.navigateByUrl('nosarticles');
      this.getRolesUsers();
    }
  }

  constructor (private roleServ:RoleService, private router:Router){}

connexion(){
  console.log("testcon")
  this.router.navigateByUrl('connexion');
}

affichageArticle(){
this.router.navigateByUrl('nosarticles');
}

gestionArticle(){
  this.router.navigateByUrl('gestionArticles');
  }

getRolesUsers(){
  this.nomroleuser = this.user.roles.map(role => role.nomrole);
  //console.log("methode get role" + this.nomroleuser[0]);
  /*
this.roleServ.getRoleofUti(this.user.idutilisateur).subscribe(
  response =>{ this.roleusers = response;
  
  console.log(this.roleusers[1].nomrole);

  this.nomroleuser = this.roleusers.map(role => role.nomrole);
  console.log("methode get role" + this.nomroleuser[0]);


}
) */



  }

gestionCommmande(){

}
gestionUtilisateurs(){

}
logout(){
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
  //sessionStorage.clear();
  this.router.navigateByUrl('connexion');
}

reload(): void
  {
    window.location.reload();
  }
}
