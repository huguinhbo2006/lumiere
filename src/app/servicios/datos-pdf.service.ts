import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GeneralesService } from './generales.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosPDFService {
  uri = this.generales.getUrl() + '/pdf/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    Authorization : 'bearer ' + this.generales.getSesionToken()
  });
  constructor(private http: HttpClient, private generales: GeneralesService) { }

  fichaInscripcion(ficha: any) {
    const url = this.uri + 'fichaInscripcion';
    return this.http.post(url, {ficha}, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }

  cartaCongelacion(ficha: any) {
    const url = this.uri + 'cartaCongelacion';
    return this.http.post(url, {ficha}, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }

  estadoCuenta(alumno: any) {
    const url = this.uri + 'estadoCuenta';
    return this.http.post(url, {alumno}, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }

  reciboPago(recibo: any) {
    const url = this.uri + 'reciboPago';
    return this.http.post(url, {recibo}, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }

  ingreso(ingreso: any) {
    const url = this.uri + 'ingreso';
    return this.http.post(url, {ingreso}, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }

  egreso(egreso: any) {
    const url = this.uri + 'egreso';
    return this.http.post(url, {egreso}, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }
  
  nomina(nomina: any) {
    const url = this.uri + 'nomina';
    return this.http.post(url, {nomina}, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }

  corte(body: any) {
    const url = this.uri + 'corte';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }

  boletaAlumno(body: any) {
    const url = this.uri + 'boletaAlumno';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }

  boletaGrupo(body: any) {
    const url = this.uri + 'boletaGrupo';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta));
  }
}
