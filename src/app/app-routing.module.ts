import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContador } from './Contador/app.contador';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes    = [

    /*
    ESTO COMENTADO LO SAQUE DEL CURSO, 101 (rutas de nuestra aplicacion)
    el problema es que si lo descomento, me pone el enlace de contador dos veces
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full'                        
    },
    */
    {
        path: 'contador',
        component: AppContador,
    },
    {
        path: 'heroes',
        component: HeroesComponent,
    }        

];

@NgModule({
    imports: [
        RouterModule.forRoot ( routes )
    ],
    exports: [
        RouterModule
    ]    

})

export class AppRoutingModule {}