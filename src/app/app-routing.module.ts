import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Tut52Component } from './angTuts/tut52/tut52.component';
import { Tut52aComponent } from './angTuts/tut52a/tut52a.component';
import { Tut54Component } from './angTuts/tut54/tut54.component';
import { Tut55Component } from './angTuts/tut55/tut55.component';
import { Tut55child1Component } from './angTuts/tut55child1/tut55child1.component';
import { Tut55child2Component } from './angTuts/tut55child2/tut55child2.component';

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
    path:'tut55', component:Tut55Component,
    children:[
      {path:'child01',component:Tut55child1Component},
      {path:'child02',component:Tut55child2Component},
      
    ]
  },





  // {
  //   path:'**',component:Tut54Component, // Wild Card route when page url is not found
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
