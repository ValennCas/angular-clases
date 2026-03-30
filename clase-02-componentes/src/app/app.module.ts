import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { PruebaDosComponent } from './prueba-dos/prueba-dos.component';
import { PruebaTresComponent } from './prueba-tres/prueba-tres.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [ //Todos los componentes que se van creando
    AppComponent,
    PruebaComponent,
    PruebaDosComponent,
    PruebaTresComponent,
    ToolbarComponent,
    StudentsPageComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
