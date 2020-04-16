import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CongeneutilisationComponent } from './congeneutilisation/congeneutilisation.component';


const routes: Routes = [{path:"",component: CongeneutilisationComponent}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CongeneutilisationRoutingModule { }
