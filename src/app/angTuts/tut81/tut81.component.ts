import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-tut81',
  templateUrl: './tut81.component.html',
  styleUrls: ['./tut81.component.css']
})
export class Tut81Component {
  title = 'Angular APIs';
  softBooks:Observable<Book[]> | undefined;
  constructor(private _bookservice:BookService){

  }
  ngOnInit(){
    this.getsoftBooks();
  }
  getsoftBooks(){
    // this.softBooks.getBooks().subscribe(books=>this./this.softBooks)
    this.softBooks=this._bookservice.getBooks();
  }
}
