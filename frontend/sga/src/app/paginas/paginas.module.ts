import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinComponent } from './loguin/loguin.component';
import {FormsModule} from "@angular/forms";
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [LoguinComponent, PrincipalComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaginasModule { }
