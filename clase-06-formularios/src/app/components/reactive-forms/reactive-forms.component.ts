import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { noHomeroValidator } from '../../utils/validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})

/**En los form reactivos las validaciones vienen del lado de TS */
export class ReactiveFormsComponent {
   mi_formulario: FormGroup;

  constructor(private formBuilder: FormBuilder){

    //Modelar los datos que quiero obtener de mi form
    this.mi_formulario = this.formBuilder.group({
      // name: this.formBuilder.control(""),
      name: ['', 
        [
          noHomeroValidator
        ]
      ],
      lastName: this.formBuilder.control("", [
        Validators.maxLength(100),
        Validators.required,
      ]),
      email: this.formBuilder.control("", [
        Validators.pattern(new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')),
        Validators.required
      ]),
      password: ["", 
        Validators.required
      ],
    });

    //  SIN FORM BUILDER - ES LO MISMO
    // this.mi_formulario = new FormGroup({
    //   name: new FormControl(""),
    //   lastname: new FormControl(""),
    // })
  };

    get emailControl(){
      return this.mi_formulario.get('email');
    };

    get passwordControl(){
      return this.mi_formulario.get('password');
    }

    get nameControl(){
      return this.mi_formulario.get("name");
    }


  onSubmit(): void {
    if (this.mi_formulario.valid) {
      Swal.fire({
        icon: "success",
        title: "Realizado",
        text: "Usuario registrado correctamente",
      });
    } else {
      // Marca todos los campos como tocados para mostrar errores
      this.mi_formulario.markAllAsTouched();

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor complete todos los campos obligatorios correctamente",
      });
    }
    
  }
}
