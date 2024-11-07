import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { GeneralesService } from './generales.service';

@Injectable({
  providedIn: 'root'
})
export class NominasService {
  constructor(private http: HttpClient, private generales: GeneralesService) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    Authorization : 'bearer ' + this.generales.getSesionToken()
  });
  uri = this.generales.getUrl()+'/nominas/';
  
  creadas() {
    const url = this.uri + 'creadas';
    return this.http.get(url, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  autorizar(body: any) {
    const url = this.uri + 'autorizar';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  autorizadas(body: any) {
    const url = this.uri + 'autorizadas';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  cobrar(body: any) {
    const url = this.uri + 'cobrar';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }
  
  validar(dato: any){
    if(this.generales.validarString(dato.nombre)){
      this.generales.mensajeError('No se ha ingresado el nombre');
      return false;
    }
    return true;
  }
}
