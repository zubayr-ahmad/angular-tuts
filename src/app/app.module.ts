import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tut52Component } from './angTuts/tut52/tut52.component';
import { Tut53Component } from './angTuts/tut53/tut53.component';
import { Tut52aComponent } from './angTuts/tut52a/tut52a.component';
import { Tut54Component } from './angTuts/tut54/tut54.component';
import { Tut55Component } from './angTuts/tut55/tut55.component';
import { Tut55child1Component } from './angTuts/tut55child1/tut55child1.component';
import { Tut55child2Component } from './angTuts/tut55child2/tut55child2.component';

import { Tut81Component } from './angTuts/tut81/tut81.component';
import { BookService } from './angTuts/book.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { TestData } from './angTuts/testData';
import { HttpClientModule } from '@angular/common/http';
import { Tut82Component } from './angTuts/tut82/tut82.component';




@NgModule({
  declarations: [
    AppComponent,
    Tut52Component,
    Tut53Component,
    Tut52aComponent,
    Tut54Component,
    Tut55Component,
    Tut55child1Component,
    Tut55child2Component,
    Tut81Component,
    Tut82Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData),


  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
