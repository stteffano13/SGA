import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PaginasModule} from './paginas/paginas.module';
import {FormsModule} from "@angular/forms";
import { AdministradorService } from "./servicios/adminsitrador.servicio";
import { EstudianteService } from "./servicios/estudiante.servicio";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    PaginasModule,
    FormsModule,
    RouterModule
  
  ],
  providers: [AdministradorService,EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
