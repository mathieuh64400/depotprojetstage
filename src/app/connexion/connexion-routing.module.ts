import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ConnexionComponent } from './connexion/connexion.component';


const routes: Routes = [{path:"", component:ConnexionComponent}];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ConnexionRoutingModule { }
