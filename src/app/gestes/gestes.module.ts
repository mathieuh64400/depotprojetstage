import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { GestesRoutingModule } from './gestes-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { GestesComponent } from './gestes/gestes.component';


@NgModule({
  declarations: [GestesComponent],
  imports: [
    GestesRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GestesModule { }
