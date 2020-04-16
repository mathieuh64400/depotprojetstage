import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NotificationRoutingModule } from './notification-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [NotificationComponent],
  imports: [
    NotificationRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NotificationModule { }
