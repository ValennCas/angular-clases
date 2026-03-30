import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-tres',
  template: `
  <h1>Titulo Tres {{ edad }}</h1>
    <p>
      prueba-tres works!
    </p>
  `,
  styles: `
  p{
  font-weight: 800
  }`
})

//Puede ser buena o mala practica
//Si es un componente pequeño (un titulo) esta bien
//Pero si es un componente grande, es mala practica
export class PruebaTresComponent {
  edad = 33
}
