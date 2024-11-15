import { Component } from '@angular/core';
import { datatableConfig } from '../../interfaces/tables.interface';
import { GeneralesService } from '../../servicios/generales.service';
import { CalendariosService } from '../../servicios/calendarios.service';
import { CuponesService } from '../../servicios/cupones.service';

@Component({
  selector: 'app-cursos-congelados',
  templateUrl: './cursos-congelados.component.html',
  styleUrl: './cursos-congelados.component.css'
})
export class CursosCongeladosComponent {
  configuracion: datatableConfig = {
    alias: ['Alumno', 'Monto', 'Codigo', 'Ficha'],
    encabezados: ['alumno', 'monto', 'codigo', 'ficha'],
    busqueda: true
  };
  datos: any;
  cargando = false;
  lista: any;
  
  constructor(
    private generales: GeneralesService,
    private servicio: CalendariosService,
    private servicio2: CuponesService
  ){}
  
  ngOnInit(): void {
    this.mostrar();
  }
  
  mostrar(){
    this.cargando = true;
    this.servicio.mostrar().subscribe((respuesta: any) => {
      this.cargando = false;
      this.lista = respuesta;
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }
  
  traer(id: any){
    this.cargando = true;
    this.servicio2.cursosCongelados({idFicha: id}).subscribe((respuesta: any) => {
      this.cargando = false;
      this.datos = respuesta;
    },
    error => {
      this.cargando = false;
      this.generales.interpretarError(error);
    });
  }
}
