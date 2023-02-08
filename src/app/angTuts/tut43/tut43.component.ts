import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-tut43',
  templateUrl: './tut43.component.html',
  styleUrls: ['./tut43.component.css']
})
export class Tut43Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  loginform = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z+$]')]), // This will validate a the data containg a-z or A-Z and +$ I don't know may be the syntax
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  userLogin(){
    console.log(this.loginform)
    console.log(this.loginform.value)
  }

  get userVald(){
    return this.loginform.get('user')
  }

  get password(){
    return this.loginform.get('password')
  }








}
