//Validaciones personalizadas

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const noHomeroValidator: ValidatorFn = (
    control:AbstractControl
): ValidationErrors | null =>{
    console.log(control);
   if(typeof control.value === "string" && control.value?.includes("homero")){
        return {
            noHomero: true
        }
   }
   
    return null; //Campo valido (no tiene errores)

} 