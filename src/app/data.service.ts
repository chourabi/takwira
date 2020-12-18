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


  public getFeild(data:any){
    let token = ""+localStorage.getItem("token");
    
    return this.httpClient.get("http://localhost:3002/app/all",{headers:{
      "Content-Type":"application/json",
      "Authorization":token
    }});
  }  



  public addFeild(data:any){
    let token = ""+localStorage.getItem("token");
    return this.httpClient.post("http://localhost:3002/app/add",data,{headers:{
      "Content-Type":"application/json",
      "Authorization":token
    }});

  }

  public auth(data:any){
    console.log(data);
    
    return this.httpClient.post("http://localhost:3002/auth",data);
  }

}
