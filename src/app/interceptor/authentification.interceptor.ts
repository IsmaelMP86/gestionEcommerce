import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationServService } from '../services/authentification-serv.service';


@Injectable()
export class AuthChaineInterceptor implements HttpInterceptor {

  

  constructor(private authServ: AuthentificationServService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    if(sessionStorage.getItem("token"))
    {
      console.log('if interceptor');
      let token = sessionStorage.getItem("token") ?? ""

      request=request.clone({
        setHeaders:{
            Authorization: token
        }
      })

      console.log('interceptor');
    }
    return next.handle(request);
  }

}