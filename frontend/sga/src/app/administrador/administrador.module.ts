import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { RegistroEstudianteComponent } from './registro-estudiante/registro-estudiante.component';

@NgModule({
  declarations: [MenuAdministradorComponent, RegistroEstudianteComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
