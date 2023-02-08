import { Component } from '@angular/core';

@Component({
  selector: 'app-tut12',
  templateUrl: './tut12.component.html',
  styleUrls: ['./tut12.component.css']
})
export class Tut12Component {
  count:number=0;
  // counter(str:string){
  //   if (str=='add'){this.count++}
  //   else{this.count--;}
  // }
  counter(type:string){
    type=='add' ?this.count++:this.count--;
    // if type(variable) is equal to add then ++ count else: -- count;
  }
}
