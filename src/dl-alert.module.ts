import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DlAlert } from './components/dl-alert';

@NgModule({
  declarations: [
    DlAlert
  ],
  exports: [
    DlAlert
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DlAlertModule {}
