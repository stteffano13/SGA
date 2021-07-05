import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { RegistroEstudianteComponent } from './registro-estudiante/registro-estudiante.component';
import {FormsModule} from "@angular/forms";
import { ListadoEstudiantesComponent } from './listado-estudiantes/listado-estudiantes.component';
import { ModificarEstudianteComponent } from './modificar-estudiante/modificar-estudiante.component';
import { InicioAdministradorComponent } from './inicio-administrador/inicio-administrador.component';
@NgModule({
  declarations: [MenuAdministradorComponent, RegistroEstudianteComponent, ListadoEstudiantesComponent, ModificarEstudianteComponent, InicioAdministradorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule
  ]
})
export class AdministradorModule { }
