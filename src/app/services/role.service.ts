import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  
  getRoleofUti(iduti:number)
  { return this.http.get<Role[]>(`http://localhost:8030/api/roles/${iduti}`)
}
}

