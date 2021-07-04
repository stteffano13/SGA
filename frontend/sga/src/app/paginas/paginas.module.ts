import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinComponent } from './loguin/loguin.component';
import {FormsModule} from "@angular/forms";
import { PrincipalComponent } from './principal/principal.component';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';

@NgModule({
  declarations: [LoguinComponent, PrincipalComponent, MiCuentaComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaginasModule { }
