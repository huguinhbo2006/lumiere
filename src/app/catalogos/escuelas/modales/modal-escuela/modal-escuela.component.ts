import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GeneralesService } from '../../../../servicios/generales.service';

@Component({
  selector: 'app-modal-escuela',
  templateUrl: './modal-escuela.component.html',
  styleUrl: './modal-escuela.component.css'
})
export class ModalEscuelaComponent {
  @Output() emitidor = new EventEmitter<any>();
  @Input() dato = {
    nombre: '',
    idTipo: 0,
    grado: 0
  };
  @Input() lista: any;
  @Input() modificar = false;
  grados = [
    { id: 1, nombre: 'Preparatoria' },
    { id: 2, nombre: 'Secundaria' }
  ];
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
