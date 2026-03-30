import { AfterViewInit, Component, ElementRef,input, EventEmitter, OnInit, output, ViewChild } from '@angular/core';
import { Usuario } from '../../models';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent implements AfterViewInit, OnInit{

  @ViewChild('mi_lista')
  mi_lista?: ElementRef;

  constructor(){
    console.log("constructor", this.mi_lista);
  }

  ngOnInit(): void {
    console.log("OnInit", this.mi_lista);
  }

  // Despues de que la vista se inicie
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.mi_lista);
  }

  // @Input() //Definimos que el valor de esta propiedad vendra de fuera de este componente
  // usuarios: Usuario[] = [];

  usuarios = input<Usuario[]>([]);

  // @Output()
  // deleteUser = new EventEmitter();
  deleteUser = output<number>();
}
