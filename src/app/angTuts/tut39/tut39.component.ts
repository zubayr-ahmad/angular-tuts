import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tut39',
  templateUrl: './tut39.component.html',
  styleUrls: ['./tut39.component.css']
})
export class Tut39Component {
@ Input() data:{name:string,email:string}={name:'',email:''};


// Paste the following code in the app.component.ts to run tut39 completely
userDetails=[
  {name:"zubair",email:"zubair@gmail.com"},
  {name:"zain",email:"zain@gmail.com"},
  {name:"umair",email:"umair@gmail.com"},
  {name:"faisal",email:"faisal@gmail.com"},
  
]

}
