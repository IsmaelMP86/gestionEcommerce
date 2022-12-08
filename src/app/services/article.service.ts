import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

getArticles(){
  return this.http.get<Article[]>('http://localhost:8030/api/articles')
}

getArticlebyId(id:number){
  return this.http.get<Article>(`http://localhost:8030/api/articles/${id}`)
}

addArticle(art:Article){
  return this.http.post('http://localhost:8030/api/articles', art);
}
}
