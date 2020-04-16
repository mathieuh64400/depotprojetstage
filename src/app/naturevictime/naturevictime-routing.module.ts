import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NaturevictimeComponent } from './naturevictime/naturevictime.component';


const routes: Routes = [{path:"",component:NaturevictimeComponent}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class NaturevictimeRoutingModule { }
