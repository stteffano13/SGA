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
  public tipoUsuarioC = 'password';
  public clase_ojoUsuarioC = 'fa fa-eye fa-lg';
  public textBoxContraC = true;
  public estadoClaveEstudiante;
  public txtvalidacionOjoModificarEstudiante = true;
  public textBox = true;
  public txtHide = false;
  public txtAparece = true;
  public txtvalidacionModificarEstudiante = true;
  public contrasenaUpdateEstudiante;
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



  habilitarContrasenaC() {

    if (this.tipoUsuarioC === 'text') {
      this.tipoUsuarioC = 'password';
      this.clase_ojoUsuarioC = 'fa fa-eye fa-lg';
      this.textBoxContraC = true;
      this.estadoClaveEstudiante = '0';
      this.txtvalidacionOjoModificarEstudiante = false;
    } else {
      this.tipoUsuarioC = 'text';
      this.clase_ojoUsuarioC = 'fa fa-eye-slash fa-lg';
      this.textBoxContraC = false;
      this.estadoClaveEstudiante = '1';
      this.txtvalidacionOjoModificarEstudiante = true;
    }
    console.log('estadoClaveContrasenaChofer......', this.estadoClaveEstudiante);
  }

  deshabilitar() {
    this.textBox = !this.textBox;
    this.txtHide = !this.txtHide;
    this.txtAparece = !this.txtAparece;
   
    this.txtvalidacionModificarEstudiante = false;
  }
  habilitar() {
    this.textBox = !this.textBox;
    this.txtHide = true;
    this.txtAparece = false;
 
    this.txtvalidacionModificarEstudiante = true;
  }


  async onUpdateEstudiante(estado) {

    console.log('mi contra con ******>>>>', this.contrasenaUpdateEstudiante);
    this.datosEstudiantes.ESTADO_ESTUDIANTE = estado;
    this.loading = true;

    if (this.contrasenaUpdateEstudiante != null || this.contrasenaUpdateEstudiante != '') {
      this.estadoClaveEstudiante = '1';
      console.log('estadoclaveusuario si es diferente null ""', this.estadoClaveEstudiante);
    }

    if (this.contrasenaUpdateEstudiante == null || this.contrasenaUpdateEstudiante == '') {
      this.estadoClaveEstudiante = '0';
      console.log('estadoclaveusuario 0000000 ""', this.estadoClaveEstudiante);
    }

    if (this.estadoClaveEstudiante == '1') {
      console.log('Estado clave usuario vane', this.contrasenaUpdateEstudiante);
      this.datosEstudiantes.contrasena = this.contrasenaUpdateEstudiante;
    }
try{
    let response= await this._estudianteServicio.update_estudiante(this.datosEstudiantes, this.estadoClaveEstudiante).toPromise();
      
        this.loading = false;
        this.contrasenaUpdateEstudiante = '';
        console.log("satisfactoriamenteUpdate");
        this.loading = false;
        this.mensageCorrrecto(response.message);
    
    }catch(e){

      
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
