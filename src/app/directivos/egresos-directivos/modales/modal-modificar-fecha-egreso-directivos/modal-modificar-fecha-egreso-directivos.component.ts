import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GeneralesService } from '../../../../servicios/generales.service';

@Component({
  selector: 'app-modal-modificar-fecha-egreso-directivos',
  templateUrl: './modal-modificar-fecha-egreso-directivos.component.html',
  styleUrl: './modal-modificar-fecha-egreso-directivos.component.css'
})
export class ModalModificarFechaEgresoDirectivosComponent {
  @Output() emitidor = new EventEmitter<any>();
  @Input() dato = {
    fecha: '',
  };
  constructor(private generales: GeneralesService) { }
  
  ngOnInit(): void {
  }
  
  emitir() {
    this.emitidor.emit(this.dato);
  }
  
  cerrar() {
    this.generales.cerrarModal();
  }
}
