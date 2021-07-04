import { Component, OnInit } from '@angular/core';
import { Estudiante } from "../../../models/estudiante";
@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.css']
})
export class RegistroEstudianteComponent implements OnInit {

  public estudiante_register: Estudiante;
  public clase_ojoEstudiante = 'fa fa-eye fa-lg';
  constructor() { 
    this.estudiante_register = new Estudiante("", "", "", "", "", "", "", "");
  }
  
  ngOnInit(){

  }
}
