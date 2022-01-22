import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContador } from './Contador/app.contador';
import { HeroesComponent } from './heroes/heroes.component';

import { Grupo1ModuleModule } from './Modulos/grupo1-module.module';

@NgModule({
  declarations: [
    AppComponent,
    AppContador,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Grupo1ModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
