import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ProfilRoutingModule } from './profil-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [ProfilComponent],
  imports: [
    ProfilRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfilModule { }
