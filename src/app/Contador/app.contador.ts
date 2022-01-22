import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './app.contador.html'
})
export class AppContador {
    //declaro un titulo para la pagina
    Titulo:string = 'contador';

    //declaro una variable que llevala la cuenta, llamada numero
    numero:number = 10;
    numero2:number = 10;
    numero3:number = 10;

    sumar() {
      //se usa this para hacer referencia a la variable de la clase
      //si no se usa this, dira que numero no existe ya que trata de buscarlo en el ambito de la funcion
      this.numero2++;
    }

    restar() {
      this.numero2--;
    }  

    sumar2(incremento:number) {
      this.numero3+=incremento;
    }

    restar2(decremento:number) {
      this.numero3-=decremento;
    }      

}
