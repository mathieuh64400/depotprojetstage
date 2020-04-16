import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { GraviteComponent } from './gravite/gravite.component';


const routes: Routes = [{path:"",component:GraviteComponent}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class GraviteRoutingModule { }
