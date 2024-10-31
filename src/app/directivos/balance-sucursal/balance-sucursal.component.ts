import { Component } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';
import { BalancesService } from '../../servicios/balances.service';

@Component({
  selector: 'app-balance-sucursal',
  templateUrl: './balance-sucursal.component.html',
  styleUrl: './balance-sucursal.component.css'
})
export class BalanceSucursalComponent {
  ingresos: any;
  egresos: any;
  cargando = false;
  total: any;
  administrativo: any;
  listas = {
    sucursales: []
  }
  busqueda = localStorage.getItem('sucursal')?.toString();
  constructor(private generales: GeneralesService, private servicios: BalancesService){
    this.mostrar();
  }

  mostrar(){
    this.cargando = true;
    this.servicios.mostrar({id: this.busqueda}).subscribe((respuesta: any) => {
      this.cargando = false;
      this.ingresos = respuesta.ingresos;
      this.egresos = respuesta.egresos;
      this.total = respuesta.total;
      this.administrativo = respuesta.administrativo;
      this.listas = respuesta.listas;
      console.log(respuesta);
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }
}
