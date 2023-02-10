import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tut52Component } from './angTuts/tut52/tut52.component';
import { Tut53Component } from './angTuts/tut53/tut53.component';
import { Tut52aComponent } from './angTuts/tut52a/tut52a.component';
import { Tut54Component } from './angTuts/tut54/tut54.component';

@NgModule({
  declarations: [
    AppComponent,
    Tut52Component,
    Tut53Component,
    Tut52aComponent,
    Tut54Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
