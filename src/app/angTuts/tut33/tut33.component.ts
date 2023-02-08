import { Component } from '@angular/core';

@Component({
  selector: 'app-tut33',
  templateUrl: './tut33.component.html',
  styleUrls: ['./tut33.component.css']
})
export class Tut33Component {
  constructor(){

  }
  CountryDetails:any[]=[
    {
      'country':'Pakistan',
      'people':[
        {
          "name":'zubair'
        },
        {
          "name":'zain'
        },
        {
          "name":'umair'
        },
        {
          "name":'faisal'
        },
      ]
    },
    {
      'country':'India',
      'people':[
        {
          "name":'sdfja'
        },
        {
          "name":'asdf'
        },
        {
          "name":'dsaf'
        },
        {
          "name":'fgafsd'
        },
      ]
    }
  ]
}
