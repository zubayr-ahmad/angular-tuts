import { Component } from '@angular/core';

@Component({
  selector: 'app-tut35',
  templateUrl: './tut35.component.html',
  styleUrls: ['./tut35.component.css']
})
export class Tut35Component {
  users=['a','b','c','d','f']

  getcssclass(flag:string){
    let cssclass;
    if(flag=="mode"){
      cssclass={
        'one':true,
        'two':true
      }

    }
    else{
      cssclass={
        'one':false,
        'two':true
      }
    }
    return cssclass;
  }



}



