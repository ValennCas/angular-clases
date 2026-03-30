
// Encapsula logica de la aplicacion 
// y referencia a los archivos de vista y estilo de este mismo
import { Component } from '@angular/core';

//Decorador - envia un objeto de configuracion
@Component({
  selector: 'app-root', //nombre etiqueta
  templateUrl: './app.component.html', // archivo html del componente
  styleUrl: './app.component.scss' // archivo de estilos del componente
})


export class AppComponent {
  title = 'clase-02';
  prueba = "llega";
}
