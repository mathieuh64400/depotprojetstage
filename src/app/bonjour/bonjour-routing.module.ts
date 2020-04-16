import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BonjourComponent } from './bonjour/bonjour.component';


const routes: Routes = [{path:"",component: BonjourComponent}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class BonjourRoutingModule { }
