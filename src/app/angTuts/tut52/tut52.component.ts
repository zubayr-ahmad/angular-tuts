import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tut52',
  templateUrl: './tut52.component.html',
  styleUrls: ['./tut52.component.css']
})
export class Tut52Component implements OnInit {

  constructor(private router: Router) {}
  check=true;
  student() {
    if (this.check){

      this.router.navigate(['tut52abcd']);
      this.check=false
    }
    else{
      this.router.navigate(['app-comp'])
      this.check=true
    }
  }

  ngOnInit(): void {
  }

}
