import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

    heroes: string[]  = ['Spiderman','Iroman','Hulk','Thor']

    ListaElementos: any[] = [null,undefined,'','valor cualquiera']

    heroeBorrado: string ='';

    valorNumerico: number = 0;

    BorrarPrimerHeroe()
    {
      this.heroeBorrado = this.heroes.shift() + '';
    }

    aumentarvalorNumerico()
    {
      this.valorNumerico++;
    }

}
