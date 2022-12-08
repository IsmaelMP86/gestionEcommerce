import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { GestionUtilisateursComponent } from './component/gestion-utilisateurs/gestion-utilisateurs.component';
import { GestionCommandesComponent } from './component/gestion-commandes/gestion-commandes.component';
import { GestionArticlesComponent } from './component/gestion-articles/gestion-articles.component';
import { GestionPanierComponent } from './component/gestion-panier/gestion-panier.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthChaineInterceptor } from './interceptor/authentification.interceptor';
import { AuthGuardService } from './services/auth-guard.service';
import { AffichageArticlesComponent } from './component/affichage-articles/affichage-articles.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GestionUtilisateursComponent,
    GestionCommandesComponent,
    GestionArticlesComponent,
    GestionPanierComponent,
    AuthentificationComponent,
    AffichageArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
      useClass: AuthChaineInterceptor,
      multi: true,
    }, AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
