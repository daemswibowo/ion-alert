import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonAlert } from './components/ion-alert';

@NgModule({
  declarations: [
    IonAlert
  ],
  exports: [
    IonAlert
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class IonAlertModule {}
