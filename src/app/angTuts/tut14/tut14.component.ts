import { Component } from '@angular/core';

@Component({
  selector: 'app-tut14',
  templateUrl: './tut14.component.html',
  styleUrls: ['./tut14.component.css']
})
export class Tut14Component {
  name='Zubair';
  disable=true;
  Enable(){
    this.disable=false;
  }
}
