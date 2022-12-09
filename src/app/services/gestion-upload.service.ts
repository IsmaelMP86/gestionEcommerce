import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionUploadService {

  constructor(private http:HttpClient) { }


  saveFile(data: FormData){
    
   
    return this.http.post<any>('http://localhost:8015/uploadFile',data); 
  }
}
