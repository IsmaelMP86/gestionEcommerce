import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageArticlesComponent } from './component/affichage-articles/affichage-articles.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { GestionArticlesComponent } from './component/gestion-articles/gestion-articles.component';

const routes: Routes = [
  {path:'connexion', component:AuthentificationComponent},
  {path:'nosarticles', component:AffichageArticlesComponent},
  {path:'gestionArticles', component:GestionArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
