import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AdministradorService } from "../../servicios/adminsitrador.servicio";
@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router, public _adminsitradorServicio:AdministradorService) { }

  ngOnInit() {
  }


  salirAdministrador(){

    this._adminsitradorServicio.logoutAdmin();
    this.router.navigate(['login']);
  }
}
