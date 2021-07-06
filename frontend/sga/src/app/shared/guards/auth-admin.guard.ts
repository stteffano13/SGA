import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdministradorService } from "../../servicios/adminsitrador.servicio";
@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(public _administradorServicio:AdministradorService, public router:Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._administradorServicio.getIdentityAdmin()){
        console.log("Hola si esta", this._administradorServicio.getIdentityAdmin());
        return true;
      }else {
        this.router.navigate(['login'])
        return false;
      }
  }
  
}
