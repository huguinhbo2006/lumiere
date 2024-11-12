import { Component } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';
import { BalancesService } from '../../servicios/balances.service';
import { PdfService } from '../../servicios/pdf.service';

@Component({
  selector: 'app-corte-caja',
  templateUrl: './corte-caja.component.html',
  styleUrl: './corte-caja.component.css'
})
export class CorteCajaComponent {
  ingresos: any;
  egresos: any;
  cargando = false;
  total: any;
  administrativo: any;
  busqueda = localStorage.getItem('sucursal')?.toString();
  fecha: any;
  constructor(private generales: GeneralesService,
              private servicios: BalancesService,
              private pdf: PdfService){
    this.mostrar();
  }

  mostrar(){
    this.cargando = true;
    this.servicios.corte({id: this.busqueda}).subscribe((respuesta: any) => {
      this.cargando = false;
      this.ingresos = respuesta.ingresos;
      this.egresos = respuesta.egresos;
      this.total = respuesta.total;
      this.administrativo = respuesta.administrativo;
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }

  imprimirCorte(){
    this.pdf.pdfCorte({});
  }
}
