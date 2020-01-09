import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const api_url=environment.apiUrl;
const api_key=environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle:any;
  
  constructor(private http:HttpClient) { }

  getData(url: string){
    return this.http.get(`${api_url}/${url}&apikey=${api_key}`);
  }
}
