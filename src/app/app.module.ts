import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tut45Component } from './angTuts/tut45/tut45.component';

@NgModule({
  declarations: [
    AppComponent,
    Tut45Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
