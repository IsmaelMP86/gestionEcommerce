import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthentificationServService } from 'src/app/services/authentification-serv.service';
import { RoleService } from 'src/app/services/role.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class AuthentificationComponent {

  username!:string;
  password!:string;
  user!: Utilisateur;

  constructor(private authSer:AuthentificationServService, private router:Router, private roleServ:RoleService) {}

  ngOnInit(): void {
    
  }



  connectionOk()
  {
    

    this.authSer.getTwtToken(this.username,this.password).subscribe(
    response => 
    {
    console.log(response.jwt);
    sessionStorage.setItem("token", "Bearer "+response.jwt)

     this.authSer.getUserData(this.username).subscribe(
      response =>{
        this.user = response;
        sessionStorage.setItem('user', JSON.stringify(this.user));
        //methode a verif si ça marche
        var header:HeaderComponent = new HeaderComponent(this.roleServ,this.router);
        header.reload();

      })     
    },
    err=>
    {
      console.log('cnx non ok');
    }

    )
  }
    
}


