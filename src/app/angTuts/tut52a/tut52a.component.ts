import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tut52a',
  templateUrl: './tut52a.component.html',
  styleUrls: ['./tut52a.component.css']
})
export class Tut52aComponent implements OnInit {

  constructor(private router: Router) {}
  check=true;
  student() {
    if (this.check){

      this.router.navigate(['tut52']);
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
