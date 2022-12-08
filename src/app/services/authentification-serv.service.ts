import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationResponse } from '../models/authentification-response';
import { Utilisateur } from '../models/utilisateur';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationServService {

  
  constructor(private http:HttpClient) { }

  getTwtToken(username:string, password:string)
  {
      return this.http.post<AuthentificationResponse>('http://localhost:8030/loginUserJwt', {username, password});
  }

  
  getUserData(login:string)
  {
    return this.http.get<Utilisateur>(`http://localhost:8030/api/utilisateursdetails/${login}`)
  }
  
}
