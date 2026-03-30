import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  /**
   * Entidades que manipulan los forms de Angular
   * 
   * FormGroup -> Agrupar otros controles - Define un Objeto de otros controles
   * FormControl -> Manipula el valor de los campos(inputs, selects, checkboxs, text-area)
   * FormArray -> Manejar arrays de otros controles
   * 
   * Modelo de formulario
   * {
   *  name: "Matias",
   * lastName: "Gonzales",
   * email: "matiGonzales@gmail.com"
   * }
   */

 
  title = 'clase-06-formularios';
}
