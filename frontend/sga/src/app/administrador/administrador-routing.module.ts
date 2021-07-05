import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuAdministradorComponent} from "./menu-administrador/menu-administrador.component";
import {RegistroEstudianteComponent} from "./registro-estudiante/registro-estudiante.component";
const routes: Routes = [{path:'menu-administrador', component:MenuAdministradorComponent,
  children: [
    { path: 'registro-estudiante', component: RegistroEstudianteComponent}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
