import { Component, OnInit } from '@angular/core';
import { EstudianteService } from "../../servicios/estudiante.servicio";

@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.component.html',
  styleUrls: ['./listado-estudiantes.component.css']
})
export class ListadoEstudiantesComponent implements OnInit {
 public listadoEstudiantes;
 public loading;
 public result;
 public busqueda;
  constructor(public _estudianteServicio:EstudianteService) { }

  async ngOnInit() {
    this.listadoEstudiantes= await this._estudianteServicio.getListadoEstudiantes().toPromise();
    this.result=this.listadoEstudiantes.listadoEstudiantes;
    console.log(JSON.parse(this.listadoEstudiantes.listadoEstudiantes));
  }


  public async filtrar() {
    this.loading = true;
    this.result = await this.search(this.busqueda);
    this.loading = false;
  }

  public search(text: string): any[] {
    return this.listadoEstudiantes.listadoEstudiantes.filter(estudiante => {
      const term = text.toLowerCase();
      debugger
      return estudiante.NOMBRE_ESTUDIANTE.toLowerCase().includes(term) || estudiante.CEDULA_ESTUDIANTE.toLowerCase().includes(term)  // || siguiente
    });
  }
}
