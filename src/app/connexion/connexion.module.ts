import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ConnexionComponent } from './connexion/connexion.component';


@NgModule({
  declarations: [ConnexionComponent],
  imports: [
    ConnexionRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ConnexionModule { }
