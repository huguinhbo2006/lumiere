import { Component } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';
import { MetasIngresosService } from '../../servicios/metas-ingresos.service';

@Component({
  selector: 'app-metas-ingresos',
  templateUrl: './metas-ingresos.component.html',
  styleUrl: './metas-ingresos.component.css'
})
export class MetasIngresosComponent {
  cargando = false;
  datos: any;
  constructor(private generales: GeneralesService, private servicio: MetasIngresosService){}
  
  ngOnInit(): void {
    this.mostrar();
  }

  mostrar(){
    this.cargando = true;
    this.servicio.metas({}).subscribe((respuesta: any) => {
      this.cargando = false;
      this.datos = respuesta;
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }
}
