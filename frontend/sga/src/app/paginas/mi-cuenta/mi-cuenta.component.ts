import { Component, OnInit } from '@angular/core';
import { Estudiante } from "../../../models/estudiante";
import { EstudianteService } from "../../servicios/estudiante.servicio";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  public estudiante_register: Estudiante;
  public clase_ojoEstudiante = 'fa fa-eye fa-lg';
  constructor(public route: ActivatedRoute, public router: Router, public _estudianteServicio:EstudianteService) { 
    this.estudiante_register = new Estudiante("", "", "", "", "", "", "", "");
  }

  ngOnInit() {
  }

  salirEstudiante(){

    this._estudianteServicio.logoutEstudiante();
    this.router.navigate(['login']);
  }
}
