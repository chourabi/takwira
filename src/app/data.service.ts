import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private REST_API_SERVER = "https://jsonplaceholder.typicode.com/todos/1";

  constructor(private httpClient: HttpClient) { }
  postId : any;
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

}
