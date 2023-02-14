import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TestApisService } from 'src/app/services/test-apis.service';

@Component({
  selector: 'app-tut82',
  templateUrl: './tut82.component.html',
  styleUrls: ['./tut82.component.css']
})
export class Tut82Component implements OnInit {
  // data:any;
  // constructor(private _testapiservice:TestApisService) {
  //   this.display()
  //  }
  //  display(){
  //   this._testapiservice.getData().subscribe((response)=>
  //     this.data = response);
  //     console.log(this.data)
  //  }

  ngOnInit(): void {
  }



  constructor(private http:HttpClient){
    this.loadPosts();
    
  }

    loadPosts(){
      this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response)=>
      alert(JSON.stringify(response)));
    }
}
