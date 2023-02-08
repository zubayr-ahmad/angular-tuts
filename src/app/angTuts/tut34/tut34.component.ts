import { Component } from '@angular/core';

@Component({
  selector: 'app-tut34',
  templateUrl: './tut34.component.html',
  styleUrls: ['./tut34.component.css']
})
export class Tut34Component {
  
  people:any[]=[
    {
      'name':'a',
      'cou':'Pak'
    },
    {
      'name':'b',
      'cou':'Ind'
    },
    {
      'name':'c',
      'cou':'Aus'
    },
    {
      'name':'d',
      'cou':'Pak'
    },
    {
      'name':'e',
      'cou':'Ind'
    },
    {
      'name':'f',
      'cou':'Eng'
    },
    {
      'name':'g',
      'cou':'Pak'
    },

  ]

  getColor(cou:string){
    switch(cou){
      case 'Ind': return 'blue';
      case "Pak": return 'green';
      case 'Eng': return 'red';
      case 'Aus': return 'yellow';
      default : return 'black';

    }

  }
}

