import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
  {providedIn:'root'}
)
export class GraphQlService {
 url:string= "http://localhost:8080/graphql";

  constructor(private http:HttpClient) { 
  }

  query(query:string){
    const body = JSON.stringify({ query });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.url,body,{headers})
  }
}
