import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NaturevictimeRoutingModule } from './naturevictime-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
//  import { VictimeComponent } from './victime/victime.component';
import { NaturevictimeComponent } from './naturevictime/naturevictime.component';


@NgModule({
  declarations: [ NaturevictimeComponent],
  imports: [
    NaturevictimeRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NaturevictimeModule { }
