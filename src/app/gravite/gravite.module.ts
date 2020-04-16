import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { GraviteRoutingModule } from './gravite-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { GraviteComponent } from './gravite/gravite.component';


@NgModule({
  declarations: [GraviteComponent],
  imports: [
    GraviteRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GraviteModule { }
