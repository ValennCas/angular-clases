import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, delay, forkJoin, map, Observable, of, Subject, Subscription, take, takeUntil, tap } from 'rxjs';
import { IUser } from '../users/models';

@Component({
  selector: 'app-clase-10-rxjs-2',
  templateUrl: './clase-10-rxjs-2.component.html',
  styleUrl: './clase-10-rxjs-2.component.scss'
})
export class Clase10Rxjs2Component implements OnInit, OnDestroy {

  cambioElUsuario$ = new Subject<boolean>();

  componenteDestruido$ = new Subject<boolean>();
  
  usuarioAutenticado$ = new BehaviorSubject<IUser | null>(null); //Como hermano del Subject pero en los () debo mandar un valor inicial

  obtenerUsuarioSubscription?: Subscription;

  cargando = false;

  usuarios: IUser[] = [];

  roles: string[] = [];

  getRoles(): Observable<string[]> {
    return of(['ADMIN', 'USER', 'STUDENT'])
    .pipe(delay(1500));
  }

  getUsers(): Observable<IUser[]> {
    const USERS_DB: IUser[] = [
      {
        id: 1,
        firstName: "Juan",
        lastName: "Alonso",
        email: "juan@gmail.com",
        createdAt: new Date(),
        role: "USER"
      },
      {
        id: 2,
        firstName: "Juana",
        lastName: "Alonso",
        email: "juana@gmail.com",
        createdAt: new Date(),
        role: "ADMIN"
      }
    ];

    return of(USERS_DB).pipe(delay(3000));
  }

  
  login():void {
    this.cambioElUsuario$.next(true);
  }

    
  ngOnDestroy(): void {
    this.componenteDestruido$.next(true);
    console.log("componente destruido");
    this.componenteDestruido$.unsubscribe();
  }

  ngOnInit(): void {
    this.cargando = true;
    // forkJoin: une todos los observables, una vez que todos emiten su valor, ahi 
    // realiza una unica emision


    // forkJoin([of('hola'), of(1), of(true)]).subscribe({
    //   next: (v) => {
    //     console.log(v);
    //   }
    // })

    forkJoin([this.getRoles(), this.getUsers()]).subscribe({
      next: (v) => {
        this.roles = v[0];
        this.usuarios = v[1];
      },
      complete: () => {
        this.cargando = false;
      }
    })
    
    const obtenerUsuario$ = new Observable<number>((obs) => {
      let count = 0;
        setInterval(() => {
          count++;
          obs.next(count);
          //obs.complete();
        }, 1000);
    });

    // takeUntil -> escucha emisiones del Observable hasta que se le notifique un evento
    //  (no se fija en el valor del elemento, sino que lo emita)
    // this.obtenerUsuarioSubscription =obtenerUsuario$
    // .pipe(takeUntil(this.componenteDestruido$))
    // .subscribe({
    //   next: (v) => console.log(v),
    // })

    this.cambioElUsuario$.subscribe({
      next: (value) => {
        console.log(value)
        this.usuarioAutenticado$.next({
          id: 1,
          createdAt: new Date(),
          email: 'ema@gmail.com',
          firstName: 'ema',
          lastName: 'aa',
          role:"ADMIN"
        })
      },
    })

    this.usuarioAutenticado$.subscribe({
      next: (value) => {
        console.log(value);
      }
    })

    // const obtenerUsuarioSub = obtenerUsuario$.pipe(
    //   //Se ejecutan segun el orden en el eque se declara
    //   tap((value) => {
    //     console.log('TAP 1', value) // TAP: Sirve para debuguear o ver algo en consola
    //   }),
    //   tap(() => {
    //     console.log('TAP 2')
    //   }),
    //   map((value) =>{
    //     return value * 2; //Transforma la emision de un Observable
    //   }),
    //   take(2) //cuantas emisiones queremos recibir en la subcripcion
    //   //first()
    //   //skip(3) cuantos valores quiero ignorar (en este caso 3)
    //   //filter() => { return value > 5 ; } // escucha todas las emisiones donde sean mayor a cinco
    //   //filter() => {x => x% 2 === 1 } // escucha todas las emisiones donde x sea impar (1,3,5 ...)
    // ).subscribe({
    //   next: (value) =>{
    //     console.log(value);
    //   },
    //   error: () =>{},
    //   complete: () => {
    //     console.log("El observable se completo, por lo tanto no emite mas valores")
    //   },
    // });
  }

  

}
