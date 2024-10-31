import { Component } from '@angular/core';
import { datatableConfig } from '../../interfaces/tables.interface';
import { GeneralesService } from '../../servicios/generales.service';
import { NominasService } from '../../servicios/nominas.service';
import { SucursalesService } from '../../servicios/sucursales.service';
import { PdfService } from '../../servicios/pdf.service';

@Component({
  selector: 'app-autorizacion-nominas',
  templateUrl: './autorizacion-nominas.component.html',
  styleUrl: './autorizacion-nominas.component.css'
})
export class AutorizacionNominasComponent {
  configuracion: datatableConfig = {
    alias: ['Nomina', 'Departamento', 'Empleado', 'Nivel', 'Calendario', 'Sucursal', 'Total'],
    encabezados: ['folio', 'departamento', 'empleado', 'nivel', 'calendario', 'sucursal', 'totalFormato'],
    busqueda: true,
    multiseleccion: true
  };
  datos: any;
  cargando = false;
  seleccion: any;
  listas = {
    sucursales: []
  }
  listado: any
  idSucursal = 0;
  constructor(private generales: GeneralesService, private servicio: NominasService, private pdf: PdfService){}
  
  ngOnInit(): void {
    this.mostrar();
  }

  mostrar(){
    this.cargando = true;
    this.servicio.creadas().subscribe((respuesta: any) => {
      this.cargando = false;
      this.listas = respuesta.listas;
      this.listado = respuesta.nominas;
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }

  buscar(){
    this.datos = this.generales.sublista(this.listado, this.idSucursal, 'idSucursal')
  }

  autorizar(){
    this.cargando = true;
    const body = {
      nominas: this.seleccion
    }
    this.servicio.autorizar(body).subscribe((respuesta: any) => {
      this.cargando = false;
      this.generales.mensajeCorrecto('Nominas autorizadas correctamente');
      this.mostrar();
      this.seleccion = undefined;
      this.generales.delay(500).then(fun => {
        this.buscar();
      });
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }

  modificar(){

  }

  imprimir(){
    this.pdf.pdfNomina(this.seleccion[0].id);
  }
}
