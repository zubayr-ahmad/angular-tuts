import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tut40',
  templateUrl: './tut40.component.html',
  styleUrls: ['./tut40.component.css']
})
export class Tut40Component {
@ Output() updateDataEvent = new EventEmitter<string>();

}
