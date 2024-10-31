import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GeneralesService } from '../../../../servicios/generales.service';

@Component({
  selector: 'app-modal-voucher-egresos-directivos',
  templateUrl: './modal-voucher-egresos-directivos.component.html',
  styleUrl: './modal-voucher-egresos-directivos.component.css'
})
export class ModalVoucherEgresosDirectivosComponent {
  @Output() emitidor = new EventEmitter<any>();
  @Input() imagen = '';
  constructor(private generales: GeneralesService) { }
  
  ngOnInit(): void {
  }
  
  emitir() {
    this.emitidor.emit(this.imagen);
  }
  
  cerrar() {
    this.generales.cerrarModal();
  }
}
