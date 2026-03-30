import { Component } from '@angular/core';
import { Usuario } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  modal_visible = false;
  title = 'clase-05-comunicacion-componentes';
  usuarios_aprobados: Usuario[] = [
    {
      firstName: "Ana",
      lastName: "Gonzales"
    },
    {
      firstName: "Jack",
      lastName: "Gutierrez"
    },
    {
      firstName: "Jorge",
      lastName: "Alonso"
    }
  ];

  usuarios_desaprobados: Usuario[] = [
    {
      firstName: "Diego",
      lastName: "Gonzales"
    },
    {
      firstName: "Jacqueline",
      lastName: "Gutierrez"
    },
  ]

  deleteUser(index:number, arrayName:'usuarios_desaprobados' | 'usuarios_aprobados'):void {
    console.log('Se elimina el user en pos: '+ index);
    if (arrayName === "usuarios_aprobados"){
      this.usuarios_aprobados = this.usuarios_aprobados.filter((el, i)=> i !== index);
    }
    else{
      this.usuarios_desaprobados = this.usuarios_desaprobados.filter((el, i)=> i !== index);
    }
  }
  
  close():void {
    this.modal_visible = !this.modal_visible;
  }
}
