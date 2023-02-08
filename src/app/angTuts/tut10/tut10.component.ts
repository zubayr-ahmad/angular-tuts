import { Component } from '@angular/core';


@Component({
  selector: 'app-tut10',
  templateUrl: './tut10.component.html',
  styleUrls: ['./tut10.component.css']
})
export class Tut10Component {
  title:string="Tut10 (Events|blur|keyup|mouseover)";
  getData(str:string){
    console.warn(str);
    
  }
}
