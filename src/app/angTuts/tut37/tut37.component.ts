import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tut37',
  templateUrl: './tut37.component.html',
  styleUrls: ['./tut37.component.css'],
  preserveWhitespaces:true // add a default space between elements
})
export class Tut37Component {
  @HostListener('click',['$event'])
  show(){
    alert("Tut37's component is listening events")
  }   // As this code is written inside a component so this will not work
  // on all page rather when this component is clicked then browser will show alert
}
