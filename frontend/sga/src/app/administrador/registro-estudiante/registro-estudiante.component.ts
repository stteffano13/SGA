import { Component, OnInit } from '@angular/core';
import { Estudiante } from "../../../models/estudiante";
import { EstudianteService } from "../../servicios/estudiante.servicio";
import Swal from "sweetalert2";
@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.css']
})
export class RegistroEstudianteComponent implements OnInit {

  public estudiante_register: Estudiante;
  public clase_ojoEstudiante = 'fa fa-eye fa-lg';
  public loading=false;
  constructor(public _estudianteServicio:EstudianteService) { 
    this.estudiante_register = new Estudiante("", "", "", "", "", "", "", "");
  }
  
  ngOnInit(){

  }


  async onRegisterEstudiante() {
    
    try{
    this.loading = true;
    this.estudiante_register.estado = '0';
    let response = await this._estudianteServicio.registerEstudiante(this.estudiante_register).toPromise();
        this.mensageCorrrecto("Los datos del Estudiante se han registrado satisfactoriamente.");
        this.loading = false;
        this.limpiar();
      }
      catch (e) {
        this.loading = false;
          console.log("error Parseado:" + typeof (e) + JSON.stringify(e));
          console.log("error como objeto:" + e);
          if (JSON.stringify(e) === '{}')
            this.mensageError(e);
          else this.mensageError(JSON.stringify(e));
      
      this.loading = false;
      }
  }

  limpiar(){
  
      this.estudiante_register = new Estudiante("", "", "", "", "", "", "", "");
      // this.url2 = "'../../assets/imgs/IngresarEstudiante.png'";
    
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
