import { Component } from '@angular/core';
import { datatableConfig } from '../../interfaces/tables.interface';
import { GeneralesService } from '../../servicios/generales.service';
import { TiposIngresosService } from '../../servicios/tipos-ingresos.service';

@Component({
  selector: 'app-tipos-ingresos',
  templateUrl: './tipos-ingresos.component.html',
  styleUrl: './tipos-ingresos.component.css'
})
export class TiposIngresosComponent {
  configuracion: datatableConfig = {
    alias: ['Nombre'],
    encabezados: ['nombre'],
    busqueda: true
  };
  datos: any;
  cargando = false;
  seleccion: any;
  vista: any;
  busqueda: any;
  lista: any;
  listado: any;
  
  constructor(private generales: GeneralesService, private servicio: TiposIngresosService){}
  
  ngOnInit(): void {
    this.mostrar();
  }
  
  modal(vista: any){
    this.vista = '';
    this.generales.delay(500).then(fun => {
      this.vista = vista;
      this.generales.abrirModal();
    });
  }
  
  buscar(){
    this.datos = this.generales.sublista(this.listado, this.busqueda, 'idRubro');
  }
  
  mostrar(){
    this.cargando = true;
    this.servicio.mostrar().subscribe((respuesta: any) => {
      this.cargando = false;
      this.listado = respuesta.datos;
      this.lista = respuesta.lista;
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }
  
  nuevo(dato: any){
    if(this.servicio.validar(dato)){
      this.cargando = true;
      this.servicio.nuevo(dato).subscribe((respuesta: any) => {
        this.cargando = false;
        this.generales.mensajeCorrecto('Tipo de ingreso agregado correctamente');
        this.listado = this.generales.agregarDatoArray(this.listado, respuesta);
        this.generales.cerrarModal();
        this.buscar()
      },
      error => {
        this.cargando = false;
        this.generales.interpretarError(error);
      });
    }
  }
  
  modificar(dato: any){
    if(this.servicio.validar(dato)){
      this.cargando = true;
      this.servicio.modificar(dato).subscribe((respuesta: any) => {
        this.cargando = false;
        this.generales.mensajeCorrecto('Tipo de ingreso modificado correctamente');
        this.listado = this.generales.agregarDatoArray(this.listado, respuesta);
        this.generales.cerrarModal();
        this.seleccion = respuesta;
        this.buscar()
      },
      error => {
        this.cargando = false;
        this.generales.interpretarError(error);
      });
    }
  }
  
  activar(){
    this.cargando = true;
    this.servicio.activar(this.seleccion).subscribe((respuesta: any) => {
      this.cargando = false;
      this.generales.mensajeCorrecto('Tipo de ingreso activado correctamente');
      this.listado = this.generales.actualizarDatoArray(this.listado, respuesta);
      this.seleccion = respuesta;
      this.buscar()
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }
  
  desactivar(){
    this.cargando = true;
    this.servicio.desactivar(this.seleccion).subscribe((respuesta: any) => {
      this.cargando = false;
      this.generales.mensajeCorrecto('Tipo de ingreso desactivado correctamente');
      this.listado = this.generales.actualizarDatoArray(this.listado, respuesta);
      this.seleccion = respuesta;
      this.buscar()
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }
  
  eliminar(){
    this.cargando = true;
    this.servicio.eliminar(this.seleccion).subscribe((respuesta: any) => {
      this.cargando = false;
      this.generales.mensajeCorrecto('Tipo de ingreso eliminado correctamente');
      this.listado = this.generales.eliminarDatoArray(this.listado, respuesta);
      this.seleccion = undefined;
      this.buscar()
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }
  
}
