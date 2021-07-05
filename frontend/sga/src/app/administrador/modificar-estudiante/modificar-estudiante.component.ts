import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EstudianteService } from "../../servicios/estudiante.servicio";
import Swal from "sweetalert2";
@Component({
  selector: 'app-modificar-estudiante',
  templateUrl: './modificar-estudiante.component.html',
  styleUrls: ['./modificar-estudiante.component.css']
})
export class ModificarEstudianteComponent implements OnInit {

  public idProducto;
  public loading;
  public datosEstudiantes;
  constructor(public route: ActivatedRoute, public _estudianteServicio: EstudianteService) { }

  ngOnInit() {
    this.idProducto =  this.route.snapshot.params.idEstudiante;
    this.buscarEstudiante();
  }


  async buscarEstudiante() {
    try {
   
      let response = await this._estudianteServicio.buscarEstudiante(this.idProducto).toPromise();
      this.datosEstudiantes=response.estudiante

    } catch (e) {
      this.loading = false;
      console.log("error Parseado:" + typeof (e) + JSON.stringify(e));
      console.log("error como objeto:" + e);
      if (JSON.stringify(e) === '{}')
        this.mensageError(e);
      else this.mensageError(JSON.stringify(e));

      this.loading = false;

    }
  }


  mensageCorrrecto(mensaje) {
    Swal.fire({
      icon: 'success',
      title: '<header class="login100-form-title-registro"><h5 class="card-title">!Correcto..</h5></header>',
      text: mensaje,
      position: 'center',
      width: 600,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-primary px-5',
        //icon:'sm'
      }
    });
  }

  mensageError(mensaje) {

    Swal.fire({
      icon: 'error',
      title: '<header class="login100-form-title-registro"><h5 class="card-title">!Error..</h5></header>',
      text: mensaje,
      position: 'center',
      width: 500,
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-primary px-5',
      }
    });
  }
}
