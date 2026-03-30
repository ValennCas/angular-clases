import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { MyModalComponent } from './components/my-modal/my-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    MyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
