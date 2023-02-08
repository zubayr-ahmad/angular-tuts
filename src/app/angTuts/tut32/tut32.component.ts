import { Component } from '@angular/core';

@Component({
  selector: 'app-tut32',
  templateUrl: './tut32.component.html',
  styleUrls: ['./tut32.component.css']
})
export class Tut32Component {
  students:any[];
  constructor(){
    this.students=[
      {
        studentId:1,
        name:'zain',
        gender:'Male',
        age:16,
        Course:'MCA'

      },

      {
        studentId:2,
        name:'zubair',
        gender:'Male',
        age:20,
        Course:'MCA'
        
      },
      
      {
        studentId:3,
        name:'umair',
        gender:'Male',
        age:25,
        Course:'MCA'
        
      },

      {
        studentId:4,
        name:'faisal',
        gender:'Male',
        age:28,
        Course:'MCA'
        
      },
    ]
  }

  getMoreStudents():void{
    this.students=[
      {
        studentId:1,
        name:'zain',
        gender:'Male',
        age:16,
        Course:'MCA'

      },

      {
        studentId:2,
        name:'zubair',
        gender:'Male',
        age:20,
        Course:'MCA'
        
      },
      
      {
        studentId:3,
        name:'umair',
        gender:'Male',
        age:25,
        Course:'MCA'
        
      },

      {
        studentId:4,
        name:'faisal',
        gender:'Male',
        age:28,
        Course:'MCA'
        
      },

      {
        studentId:5,
        name:'Asad',
        gender:'Male',
        age:30,
        Course:'MCA'
        
      },
    ]
  }
  
  newtrackwalafunc(index:number,student:any):string{
    return student.studentId; //work on the basis of studen Id
  }

}
