import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestApisService {
  urlget = 'https://jsonplaceholder.typicode.com/posts'
  urlpost = 'https://jsonplaceholder.typicode.com/posts'
  
  constructor(private http:HttpClient) {

   }
   getData(){
    return this.http.get(this.urlget)

   }
   postData(data1:any){
    return this.http.post(this.urlpost,data1)
   }
}
