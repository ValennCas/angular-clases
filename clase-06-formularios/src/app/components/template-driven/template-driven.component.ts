import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {

  /**
   * Modelo de formulario{
   * name: '',
   * lastName:'',
   * email:'',
   * password:'',
   * }
   */

  mi_formulario_model = {
    name: '',
    lastName:'',
    email:'',
    password:'',
  };

  onSubmit(mi_form: NgForm):void {
    console.log(mi_form);
    if(mi_form.valid){
      Swal.fire({
        title: "enviado",
        icon:"success",
      })
    }
    else{
      mi_form.form.markAllAsTouched();
      // Swal.fire({
      //   title: "error",
      //   icon:"error",
      // })
    };

  }
}
