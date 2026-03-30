import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**Modulo raiz -  
 * Cuando se quiere mostrar un comp qe pertence a un modulo externo hay que importar el
 * modulo que lo contiene - por lo que hay que asegurarse que el modulo externo exporte el 
 * componente.
*/


/**
 * Angular esta pensado y preparado para programacion reactiva.
 * Los observables son uno de los elementos mas importantes para ella
 * 
 * Metodos: los observables funcionan de manera similar a las funciones 
 * generadoras pero añadiendo onError y onComplete.
 * 
 * Ciclo de vida Obs:
 * - next[value] -> devuelve un valor
 * - Error[error] -> se lanza cuando sucede un error 
 * - Complete() -> no devuelve nada, se lanza cuando termina next
 */