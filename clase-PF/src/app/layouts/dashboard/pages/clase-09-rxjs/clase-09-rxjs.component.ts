import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-clase-09-rxjs',
  templateUrl: './clase-09-rxjs.component.html',
  styleUrl: './clase-09-rxjs.component.scss'
})
export class Clase09RxjsComponent {

  constructor(private alertsService: AlertsService){
    //this.obtenerResultado();
    //this.runReloj();

    this.alertsService.notifier$.next('Mensaje');
  }

  //Observables
  runReloj(){
    const obs = new Observable((observer) => {

      //observer.error('Error al obtener');
      let count = 5;
      setInterval(() => {
        count--;
        if (count === 0 ) observer.complete();
        observer.next(new Date());
      }, 2000);

    });

    obs.subscribe({
      // equivale al then
      next: (res) => {
        console.log(res);
      },

      // equivale al catch
      error: (e) =>{
        console.error(e);
      },

      //equivale al finally
      complete: () => {
        console.log("completo");
      }
    })
  }

  async obtenerResultado() {
    try {
      const meDevolveraElDinero = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 3000)
      }).then().finally();;

      await meDevolveraElDinero.then((res) => {
        console.log(res);
      });
    } catch (error) {

    }
  }
}
