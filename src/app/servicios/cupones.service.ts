import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { GeneralesService } from './generales.service';

@Injectable({
  providedIn: 'root'
})
export class CuponesService {
  constructor(private http: HttpClient, private generales: GeneralesService) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    Authorization : 'bearer ' + this.generales.getSesionToken()
  });
  uri = this.generales.getUrl()+'/cupones/';
  
  cursosCongelados(body: any) {
    const url = this.uri + 'cursosCongelados';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }
}
