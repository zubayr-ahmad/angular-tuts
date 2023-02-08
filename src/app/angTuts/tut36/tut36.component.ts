import { Component } from '@angular/core';

@Component({
  selector: 'app-tut36',
  templateUrl: './tut36.component.html',
  styleUrls: ['./tut36.component.css']
})
export class Tut36Component {
  title:string='Pipes Little Advance';
  today:string=Date();
  user={'name':'Zubair',age:18}
  color='green';
  bgColor='yellow';
  updateColor(){
    this.color='yellow';
    this.bgColor='red'
  }
}
