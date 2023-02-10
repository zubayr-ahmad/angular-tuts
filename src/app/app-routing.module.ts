import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Tut52Component } from './angTuts/tut52/tut52.component';
import { Tut52aComponent } from './angTuts/tut52a/tut52a.component';
import { Tut54Component } from './angTuts/tut54/tut54.component';

const routes: Routes = [
  {
    path:'',redirectTo:'tut52',pathMatch:'full' //this is the first component when app will be loaded
  },
  {
    path:'home',component:AppComponent,
  },
  {
    path:'tut52',component:Tut52Component
  },
  {
    path:'tut52abcd',component:Tut52aComponent
  },
  {
    path:'**',component:Tut54Component, // Wild Card route when page url is not found
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
