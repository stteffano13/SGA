import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { GLOBAL } from "./global";
import { Observable } from 'rxjs/Observable';

//import jsPDF from 'jspdf';
@Injectable()
export class EstudianteService {
    public url: String;
    public identity;
    public token;
    public cont = 0;
    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }


    singupEstudiante(estudiante_to_login, getHash) {
        if (getHash != " ") {
            console.log("aqui va el hash");
            estudiante_to_login.getHash = getHash;
            console.log(estudiante_to_login.getHash);
        }
        let json = JSON.stringify(estudiante_to_login);
        let params = json;
        console.log(params);
        let headers = new Headers({ "Content-type": "application/json" });
        return this._http
            .post(this.url + "loginEstudiante", params, { headers: headers })
            .map(res => res.json());
    }





    getIdentityEstudiante() {
        let identity = JSON.parse(localStorage.getItem("identityAdmin"));
        if (identity != "undefined") {
            this.identity = identity;
        } else {
            this.identity = null;
        }
        return this.identity;
    }

    getTokenEstudiante() {

        let token = localStorage.getItem("Token");
        console.log("este es el falso token" + token);
        if (token != "undefined") {
            this.token = token;
        } else {
            this.token = null;
        }
        return this.token;
    }

    logoutEstudiante() {
        localStorage.removeItem("identity");
        localStorage.removeItem("Token");
        localStorage.clear();
        this.identity = null;
        this.token = null;
        
    }


}
