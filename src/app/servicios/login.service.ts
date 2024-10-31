import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralesService } from './generales.service';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private generales: GeneralesService) { }
  token = '';
  headers: HttpHeaders = new HttpHeaders({
  });
  uri = this.generales.getUrl();

  getToken(usuario: string, password: string) {
    const url = this.uri + 'token';
    const body = {
      usuario: usuario,
      password: password
    };
    return this.http.post(url, body, {headers: this.headers}).
    pipe( map(respuesta => respuesta),
    catchError(error => throwError(error)));
  }
}
