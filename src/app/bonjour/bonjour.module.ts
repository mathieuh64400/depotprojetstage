import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BonjourRoutingModule } from './bonjour-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BonjourComponent } from './bonjour/bonjour.component';


@NgModule({
  declarations: [BonjourComponent],
  imports: [
    BonjourRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BonjourModule { }
