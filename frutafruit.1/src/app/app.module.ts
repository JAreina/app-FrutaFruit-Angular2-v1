import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuComponent} from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component'
import { ServicioService } from "./servicios/servicio.service";
import { MostradorComponent } from './mostrador/mostrador.component';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroComponent,
    MostradorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
