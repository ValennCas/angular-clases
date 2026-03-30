import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { IUser } from './pages/users/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  showFiller = false;

  mostrarComponente = true;

  authUser$: Observable<IUser | null>;

  authUserSinPipe: IUser | null = null;
  authUserSubscription?: Subscription;


  constructor(private authService: AuthService, private router: Router){
    this.authUser$ = this.authService.authUser$;
  }

  ngOnDestroy(): void {
    this.authUserSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    // Cuando nos suscribimos manualmente a un Observable,
    // la suscripción sigue activa aunque el componente se destruya.
    // Por eso hacemos unsubscribe() para evitar que siga ejecutándose
    // y prevenir posibles memory leaks.
    this.authUserSubscription = this.authService.authUser$.subscribe({
      next: (user) => {
        this.authUserSinPipe = user;
      }
    })
  }

    // login():void{
    //   this.authService.login();
    // }

    logout():void{
      this.authService.logout();
      //Recibe argumentos para conformar la URL
      // /dashboard/users/id -> ['dashboad', 'users', id]
      this.router.navigate(['auth']);

    }

  isMobile():boolean{
    return window.innerWidth <= 500;
  }
}