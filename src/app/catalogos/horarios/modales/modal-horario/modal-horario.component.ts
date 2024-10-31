import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GeneralesService } from '../../../../servicios/generales.service';

@Component({
  selector: 'app-modal-horario',
  templateUrl: './modal-horario.component.html',
  styleUrl: './modal-horario.component.css'
})
export class ModalHorarioComponent {
  @Output() emitidor = new EventEmitter<any>();
  @Input() dato = {
    inicio: '',
    fin: '',
    idTurno: 0,
  };
  @Input() lista: any;
  @Input() modificar = false;
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
