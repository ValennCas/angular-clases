import { Directive, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { IUser } from '../../layouts/dashboard/pages/users/models';

// los argumentos puede nser obligatorios u opcionales
interface Paginacion<T, T2 = any>{
  datos: T[];
}

const user: Paginacion<IUser> = {
  datos: []
}

@Directive({
  selector: '[appRepetir]'
})



export class RepetirDirective {

    totalappRepetirTotal = input<number>(10);

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
    for (let i = 0; i < this.totalappRepetirTotal(); i++) {
      //createEmbeddedView ->envia el contenido el template al contenedor
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      
    }
   }

   

}
