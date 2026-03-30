import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  console.log("AuthGuard");
  //return false;

  const router = inject(Router);
  const authService = inject(AuthService);

  //Construye una URL como objeto sin navegar,
  //para que Angular la ejecute cuando él decida.
  //return router.createUrlTree(['auth']);

  const isAuth =  authService.verifyToken();

  return isAuth || router.createUrlTree(['auth']);

  // return authService.authUser$.pipe(
  //   map((authUser) => {
  //     if(!authUser){
  //       return router.createUrlTree(['auth']);
  //     }
  //     return true;
  //   })
  // )

};
