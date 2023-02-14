import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../angTuts/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookURL=""
  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookURL)
  }




}
