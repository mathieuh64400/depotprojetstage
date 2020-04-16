import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CongeneutilisationRoutingModule } from './congeneutilisation-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CongeneutilisationComponent } from './congeneutilisation/congeneutilisation.component';


@NgModule({
  declarations: [CongeneutilisationComponent],
  imports: [
    CongeneutilisationRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CongeneutilisationModule { }
