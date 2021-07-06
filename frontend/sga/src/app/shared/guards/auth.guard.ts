import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EstudianteService } from "../../servicios/estudiante.servicio";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public _estudianteServicio:EstudianteService, public router:Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._estudianteServicio.getIdentityEstudiante()){
        console.log("Hola si esta", this._estudianteServicio.getIdentityEstudiante());
        return true;
      }else {
        this.router.navigate(['/login'])
        return false;
      }
  }
  
}
