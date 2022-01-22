import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppContador } from './app.contador';

@NgModule({
  declarations: [
    AppContador
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppContador]
})
export class AppModule { }
