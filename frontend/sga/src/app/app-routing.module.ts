import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoguinComponent} from './paginas/loguin/loguin.component';
import {PrincipalComponent} from './paginas/principal/principal.component';
import {MiCuentaComponent} from './paginas/mi-cuenta/mi-cuenta.component';
import { AuthGuard } from './shared/guards/auth.guard';
const routes: Routes = [
  {path: 'administrador', loadChildren:'./administrador/administrador.module#AdministradorModule'},
  {path: 'login', component: LoguinComponent},
  {path: 'principal', component: PrincipalComponent, canActivate:[AuthGuard]},
  {path: 'mi-cuenta', component: MiCuentaComponent,canActivate:[AuthGuard]},
  {path: '**', redirectTo: 'login'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
