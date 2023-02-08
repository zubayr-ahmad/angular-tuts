import { Component } from '@angular/core';

@Component({
  selector: 'app-tut41',
  templateUrl: './tut41.component.html',
  styleUrls: ['./tut41.component.css']
})
export class Tut41Component {
  userLogin(item:any){
    console.log(item);
  }
}
