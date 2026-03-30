import { CanDeactivateFn } from '@angular/router';

export const unsavedChangesGuard: CanDeactivateFn<unknown> = (
  component, 
  currentRoute, 
  currentState, 
  nextState) => {
    console.log(currentRoute.children);
  
    if(confirm('Tiene cambios sin guardar, si sigue navegando perdera los datos')){
      return true;
    }
    else{
      return false;
    }
};
