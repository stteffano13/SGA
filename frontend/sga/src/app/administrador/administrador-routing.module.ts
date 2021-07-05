import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuAdministradorComponent} from "./menu-administrador/menu-administrador.component";
import {RegistroEstudianteComponent} from "./registro-estudiante/registro-estudiante.component";
import {ListadoEstudiantesComponent} from "./listado-estudiantes/listado-estudiantes.component";
import {ModificarEstudianteComponent} from "./modificar-estudiante/modificar-estudiante.component";
const routes: Routes = [{path:'menu-administrador', component:MenuAdministradorComponent,
  children: [
    { path: 'registro-estudiante', component: RegistroEstudianteComponent},
    { path: 'listado-estudiantes', component: ListadoEstudiantesComponent},
    { path: 'modificar-estudiante/:idEstudiante', component: ModificarEstudianteComponent}]}];
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
