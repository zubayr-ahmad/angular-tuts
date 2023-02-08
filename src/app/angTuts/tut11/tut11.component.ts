import { Component } from '@angular/core';

@Component({
  selector: 'app-tut11',
  templateUrl: './tut11.component.html',
  styleUrls: ['./tut11.component.css']
})
export class Tut11Component {
  displayVal:string=''
  getValue(val:string){
    console.log(val);
    let displayVal:string=val
  }
}
