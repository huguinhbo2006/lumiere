import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GeneralesService } from '../../../../servicios/generales.service';

@Component({
  selector: 'app-modal-egreso-directivos',
  templateUrl: './modal-egreso-directivos.component.html',
  styleUrl: './modal-egreso-directivos.component.css'
})
export class ModalEgresoDirectivosComponent {
  @Output() emitidor = new EventEmitter<any>();
  @Input() dato = {
    concepto: '',
    monto: '',
    observaciones: '',
    idRubro: 0,
    idTipo: 0,
    idCalendario: 0,
    idFormaPago: 0,
    idNivel: 0,
    imagen: '',
    idCuenta: 0,
    referencia: 1
  };
  @Input() modificar = false;
  @Input() listas = {
    calendarios: [],
    rubros: [],
    tipos: [],
    sucursales: [],
    formas: [],
    niveles: [],
    cuentas: []
  }
  tipos: any;
  calendarios: any;
  constructor(private generales: GeneralesService) { }
  
  ngOnInit(): void {
    if(this.modificar){
      this.buscarTipos();
    }
    this.calendarios = this.generales.calendariosActuales(this.listas.calendarios);
  }

  buscarTipos(){
    this.dato.idTipo = (this.modificar) ? this.dato.idTipo : 0;
    this.tipos = this.generales.sublista(this.listas.tipos, this.dato.idRubro, 'idRubro');
  }
  
  emitir() {
    this.emitidor.emit(this.dato);
  }
  
  cerrar() {
    this.generales.cerrarModal();
  }
}
