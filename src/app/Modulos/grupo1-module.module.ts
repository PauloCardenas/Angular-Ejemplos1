import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Componente1Component } from '../componente1/componente1.component';
import { Componente2Component } from '../componente2/componente2.component';
import { Componente3Component } from '../componente3/componente3.component';
import { Componente4Component } from '../componente4/componente4.component';
import { ComponenteCualquieraComponent } from '../componente-cualquiera/componente-cualquiera.component';

@NgModule({
  declarations: [

    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    ComponenteCualquieraComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component
  ]  
})
export class Grupo1ModuleModule { }

