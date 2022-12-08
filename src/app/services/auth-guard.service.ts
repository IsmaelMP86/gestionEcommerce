import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

//check some condition  
if (!sessionStorage.getItem('user'))  {
alert('You are not allowed to view this page');
//redirect to loggin
this.router.navigateByUrl('connexion');
//return false to cancel the navigation
return false;
} 
console.log("vous avez le droit")
return true;
}
}
