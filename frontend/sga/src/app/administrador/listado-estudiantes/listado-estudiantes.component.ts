import { Component, OnInit } from '@angular/core';
import { EstudianteService } from "../../servicios/estudiante.servicio";

@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.component.html',
  styleUrls: ['./listado-estudiantes.component.css']
})
export class ListadoEstudiantesComponent implements OnInit {
 public listadoEstudiantes;
  constructor(public _estudianteServicio:EstudianteService) { }

  async ngOnInit() {
    this.listadoEstudiantes= await this._estudianteServicio.getListadoEstudiantes().toPromise();
    console.log(JSON.parse(this.listadoEstudiantes.listadoEstudiantes));
  }

}
