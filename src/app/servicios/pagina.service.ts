import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { GeneralesService } from './generales.service';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {
  constructor(private http: HttpClient, private generales: GeneralesService) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    Authorization : 'bearer ' + this.generales.getSesionToken()
  });
  uri = this.generales.getUrl()+'/pagina/';
  
  //Paginas
  traerPaginas() {
    const url = this.uri + 'traerPaginas';
    return this.http.get(url, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  nuevaPagina(body: any) {
    const url = this.uri + 'nuevaPagina';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  modificarPagina(body: any) {
    const url = this.uri + 'modificarPagina';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Menus
  traerMenus() {
    const url = this.uri + 'traerMenus';
    return this.http.get(url, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  nuevoMenu(body: any) {
    const url = this.uri + 'nuevoMenu';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  modificarMenu(body: any) {
    const url = this.uri + 'modificarMenu';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  activarMenu(body: any) {
    const url = this.uri + 'activarMenu';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }
  
  desactivarMenu(body: any) {
    const url = this.uri + 'desactivarMenu';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Submenus
  traerSubmenus() {
    const url = this.uri + 'traerSubmenus';
    return this.http.get(url, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  nuevoSubmenu(body: any) {
    const url = this.uri + 'nuevoSubmenu';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  modificarSubmenu(body: any) {
    const url = this.uri + 'modificarSubmenu';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  activarSubmenu(body: any) {
    const url = this.uri + 'activarSubmenu';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }
  
  desactivarSubmenu(body: any) {
    const url = this.uri + 'desactivarSubmenu';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Componentes
  traerComponentes() {
    const url = this.uri + 'traerComponentes';
    return this.http.get(url, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  nuevoComponente(body: any) {
    const url = this.uri + 'nuevoComponente';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  modificarComponente(body: any) {
    const url = this.uri + 'modificarComponente';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuraciones de pagina
  nuevaConfiguracionPagina(body: any) {
    const url = this.uri + 'nuevaConfiguracionPagina';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }
  
  eliminarConfiguracionPagina(body: any) {
    const url = this.uri + 'eliminarConfiguracionPagina';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  traerConfiguracionPagina(body: any) {
    const url = this.uri + 'traerConfiguracionPagina';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  guardarConfiguracion(body: any) {
    const url = this.uri + 'guardarConfiguracion';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuracion de banners
  nuevoBannner(body: any) {
    const url = this.uri + 'nuevoBannner';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  traerBanners(body: any) {
    const url = this.uri + 'traerBanners';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  actualizarPosicionesBanner(body: any) {
    const url = this.uri + 'actualizarPosicionesBanner';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  eliminarBanner(body: any) {
    const url = this.uri + 'eliminarBanner';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuraciones de titulo
  traerTitulo(body: any) {
    const url = this.uri + 'traerTitulo';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  guardarTitulo(body: any) {
    const url = this.uri + 'guardarTitulo';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuraciones de subtitulo
  traerSubtitulo(body: any) {
    const url = this.uri + 'traerSubtitulo';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  guardarSubtitulo(body: any) {
    const url = this.uri + 'guardarSubtitulo';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuraciones de Video
  traerVideo(body: any) {
    const url = this.uri + 'traerVideo';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  guardarVideo(body: any) {
    const url = this.uri + 'guardarVideo';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuraciones de curso
  traerConfiguracionCurso(body: any) {
    const url = this.uri + 'traerConfiguracionCurso';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  guardarConfiguracionCurso(body: any) {
    const url = this.uri + 'guardarConfiguracionCurso';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Beneficios de curso
  guardarBeneficioCurso(body: any) {
    const url = this.uri + 'guardarBeneficioCurso';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  traerBeneficiosCurso(body: any) {
    const url = this.uri + 'traerBeneficiosCurso';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  eliminarBeneficioCurso(body: any) {
    const url = this.uri + 'eliminarBeneficioCurso';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Extras de curso
  guardarExtraCurso(body: any) {
    const url = this.uri + 'guardarExtraCurso';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  traerExtrasCurso(body: any) {
    const url = this.uri + 'traerExtrasCurso';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  eliminarExtraCurso(body: any) {
    const url = this.uri + 'eliminarExtraCurso';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuraciones de altas de cursos
  traerCursos(body: any) {
    const url = this.uri + 'traerCursos';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  guardarCursos(body: any) {
    const url = this.uri + 'guardarCursos';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuraciones de parrafo
  traerParrafo(body: any) {
    const url = this.uri + 'traerParrafo';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  guardarParrafo(body: any) {
    const url = this.uri + 'guardarParrafo';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuracion de listado
  guardarDatoLista(body: any) {
    const url = this.uri + 'guardarDatoLista';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  eliminarDatoLista(body: any) {
    const url = this.uri + 'eliminarDatoLista';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  traerDatosLista(body: any) {
    const url = this.uri + 'traerDatosLista';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuracion de blog
  guardarNoticias(body: any) {
    const url = this.uri + 'guardarNoticias';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  traerNoticias(body: any) {
    const url = this.uri + 'traerNoticias';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  buscarNoticias(body: any) {
    const url = this.uri + 'buscarNoticias';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuracion de vigencia
  guardarVigencia(body: any) {
    const url = this.uri + 'guardarVigencia';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  traerVigencia(body: any) {
    const url = this.uri + 'traerVigencia';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Configuracion de testimonios
  traerTestimonios(body: any) {
    const url = this.uri + 'traerTestimonios';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  guardarTestimonio(body: any) {
    const url = this.uri + 'guardarTestimonio';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  eliminarTestimonio(body: any) {
    const url = this.uri + 'eliminarTestimonio';
    return this.http.post(url, body, {headers: this.headers}).pipe( map(respuesta => respuesta) );
  }

  //Validaciones
  validarComponente(dato: any){
    if(this.generales.validarString(dato.nombre)){
      this.generales.mensajeError('No se ha ingresado el nombre del componente');
      return false;
    }
    return true;
  }

  validarPagina(dato: any){
    if(this.generales.validarString(dato.nombre)){
      this.generales.mensajeError('No se ha ingresado el nombre de la pagina');
      return false;
    }
    if(this.generales.validarString(dato.url)){
      this.generales.mensajeError('No se ha ingresado la url de la pagina');
      return false;
    }
    return true;
  }
}
