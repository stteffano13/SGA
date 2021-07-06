import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuAdministradorComponent} from "./menu-administrador/menu-administrador.component";
import {RegistroEstudianteComponent} from "./registro-estudiante/registro-estudiante.component";
import {ListadoEstudiantesComponent} from "./listado-estudiantes/listado-estudiantes.component";
import {ModificarEstudianteComponent} from "./modificar-estudiante/modificar-estudiante.component";
import {InicioAdministradorComponent} from "./inicio-administrador/inicio-administrador.component";
import { AuthAdminGuard } from '../shared/guards/auth-admin.guard';
const routes: Routes = [{path:'menu-administrador', component:MenuAdministradorComponent,canActivate:[AuthAdminGuard],
  children: [
    { path: 'registro-estudiante', component: RegistroEstudianteComponent, canActivate:[AuthAdminGuard]},
    { path: 'listado-estudiantes', component: ListadoEstudiantesComponent,canActivate:[AuthAdminGuard]},
    { path: 'inicio-administrador', component: InicioAdministradorComponent,canActivate:[AuthAdminGuard]},
    { path: 'modificar-estudiante/:idEstudiante', component: ModificarEstudianteComponent,canActivate:[AuthAdminGuard]}]}];
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
