import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/posts";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }
  getProductList():any{
    return this.http.get(this.baseUrl, this.httpOptions);
  }
  getProductDetails(id:number):any{
    return this.http.get(this.baseUrl+"/"+id, this.httpOptions);
  }
}
