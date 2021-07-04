import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { RegistroEstudianteComponent } from './registro-estudiante/registro-estudiante.component';
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [MenuAdministradorComponent, RegistroEstudianteComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule
  ]
})
export class AdministradorModule { }
