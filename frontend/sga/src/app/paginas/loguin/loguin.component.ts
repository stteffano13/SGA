import { Component, HostListener } from '@angular/core';
import Swal from "sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
//import {Toast, ToastrService} from "ngx-toastr";
import { AdministradorService } from "../../servicios/adminsitrador.servicio";
import { EstudianteService } from "../../servicios/estudiante.servicio";
@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent {
  public banderLoguin;
  public banderaRegistroAdmin;
  public obj = {
    Correo: null,
    Contrasenia: null
  };
  public identity;
  public token;
  public loading = false;
  public response;
  public response2;

  constructor(public route: ActivatedRoute, public router: Router , public _adminsitradorServicio:AdministradorService,public _estudianteServicio:EstudianteService) {
  }

  public async loguinAdministrador() {
    try {
      this.loading = true;
      // console.log("this.token", this.tokenTemporal);
     
        this.response = await this._adminsitradorServicio.singupAdministrador(this.obj, "").toPromise();
   
        this.identity = this.response.administrador;
        console.log(this.response.administrador,"identity")

      if (!this.identity.CORREO_ADMINISTRADOR) {
        this.mensageError("el usuario no se ha logueado correctamente");
      } else {

        localStorage.setItem("identity", JSON.stringify(this.identity));
    
        let reponse2 = await this._adminsitradorServicio.singupAdministrador(this.obj, "true").toPromise();
        this.loading = false;
        this.token = reponse2.token;
        if (this.token.length <= 0) {
          this.mensageError("el token nose ha generado");
        } else {
          localStorage.setItem("Token", this.token);
          this.router.navigate(['administrador/menu-administrador/inicio-administrador']);
        }
      }
    } catch (e) {
      this.loading = false;
      if (!(e instanceof HttpErrorResponse)) {
        console.log("error Parseado:" + typeof (e) + JSON.stringify(e));
        console.log("error como objeto:" + e);
        if (JSON.stringify(e) === '{}')
          this.mensageError(e);
        else this.mensageError(JSON.stringify(e));
      }
    }
    this.loading = false;
  }



  public async loguinEstudiante() {
    try {
      this.loading = true;
      // console.log("this.token", this.tokenTemporal);
     
        this.response = await this._estudianteServicio.singupEstudiante(this.obj, "").toPromise();
   
        this.identity = this.response.estudiante;
        console.log(this.response.estudiante,"identity")

      if (!this.identity.CORREO_ESTUDIANTE) {
        this.mensageError("el usuario no se ha logueado correctamente");
      } else {

        localStorage.setItem("identity", JSON.stringify(this.identity));
    
        let reponse2 = await this._estudianteServicio.singupEstudiante(this.obj, "true").toPromise();
        this.loading = false;
        this.token = reponse2.token;
        if (this.token.length <= 0) {
          this.mensageError("el token nose ha generado");
        } else {
          localStorage.setItem("Token", this.token);
          this.router.navigate(['principal']);
        }
      }
    } catch (e) {
      this.loading = false;
      if (!(e instanceof HttpErrorResponse)) {
        console.log("error Parseado:" + typeof (e) + JSON.stringify(e));
        console.log("error como objeto:" + e);
        if (JSON.stringify(e) === '{}')
          this.mensageError(e);
        else this.mensageError(JSON.stringify(e));
      }
    }
    this.loading = false;
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
