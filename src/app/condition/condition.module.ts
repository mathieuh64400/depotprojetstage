import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ConditionRoutingModule } from './condition-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ConditionComponent } from './condition/condition.component';


@NgModule({
  declarations: [ConditionComponent],
  imports: [
    ConditionRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ConditionModule { }
