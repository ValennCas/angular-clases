import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

// evitar funcion flecha en la clase
export class AppComponent {

  // atributos
  title = 'clase-04-interpolacionYdirectivas';
  hasError = false;

  isDisabled = false;

  frutas = ["Banana", "Manzana", "Pera", "Anana"];

  mostrar_listado = false;

  status: 'en-camino' | 'entregado' | 'en-preparacion' = 'en-preparacion';

  mi_cumple = new Date(2003, 11, 12);

  // si empieza vacio el arreglo si hay que poner el tipo 
  // de datos que contiene el array
  estudiantes:string[] = [];
  estudiantes2:Array<string> = [];

  // metodo = dentro de una clase
  alternar_error(){
    this.hasError = !this.hasError;
  }

  select_change(ev:Event){
    const element = ev.target as HTMLSelectElement;
    const valor = element.value as | 'en-camino' | 'entregado' | 'en-preparacion';
    this.status = valor; 
  }

  juan = new Usuario("Juan", true);
  maria = new Usuario("Maria", false);
  estudiantes_nuevos:Usuario[] = [this.juan, this.maria];

}

class Usuario{
  nombre:string;
  aprobado:boolean;

  constructor(nombre:string, aprobado:boolean){
    this.nombre = nombre;
    this.aprobado = aprobado;
  }
}

// funcion
  // function alternar_error(){
  //   // algo
  // }


let variable = "";
