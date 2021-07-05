import { Component, OnInit } from '@angular/core';
import { EstudianteService } from "../../servicios/estudiante.servicio";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router, public _estudianteServicio:EstudianteService) { }

  ngOnInit() {
  }

  salirEstudiante(){

    this._estudianteServicio.logoutEstudiante();
    this.router.navigate(['login']);
  }

}
