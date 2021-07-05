import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoguinComponent} from './paginas/loguin/loguin.component';
import {PrincipalComponent} from './paginas/principal/principal.component';
import {MiCuentaComponent} from './paginas/mi-cuenta/mi-cuenta.component';
const routes: Routes = [
  {path: 'administrador', loadChildren:'./administrador/administrador.module#AdministradorModule'},
  {path: 'login', component: LoguinComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'mi-cuenta', component: MiCuentaComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
