import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tut38',
  templateUrl: './tut38.component.html',
  styleUrls: ['./tut38.component.css']
})
export class Tut38Component {
  @ Input() item = 0;   //item with default value is 0 in case value is not sent from parent

  // Paste the following code in the app.component.ts to run tut38 completely
  data = 10;
  str:string='working';
  updateChild(){
    // console.log('it is running')
    this.data=50+Math.floor(Math.random()*20);
    // return this.str
  }
}
