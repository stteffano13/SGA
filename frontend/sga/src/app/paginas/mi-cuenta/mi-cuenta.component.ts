import { Component, OnInit } from '@angular/core';
import { Estudiante } from "../../../models/estudiante";
@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  public estudiante_register: Estudiante;
  public clase_ojoEstudiante = 'fa fa-eye fa-lg';
  constructor() { 
    this.estudiante_register = new Estudiante("", "", "", "", "", "", "", "");
  }

  ngOnInit() {
  }

}
