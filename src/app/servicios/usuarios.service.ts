import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralesService } from './generales.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient, private generales: GeneralesService) { }
  token = '';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'bearer' + this.generales.getSesionToken()
  });
  uri = this.generales.getUrl() + 'usuarios/';

  nuevo(usuario: any) {
    const url = this.uri + 'nuevo';
    return this.http.post(url, usuario, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  informacion(usuario: string | null) {
    const url = this.uri + 'informacion';
    return this.http.post(url, {usuario}, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }
}
