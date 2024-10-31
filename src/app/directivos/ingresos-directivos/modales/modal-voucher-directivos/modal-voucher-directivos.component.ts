import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralesService } from '../../../../servicios/generales.service';

@Component({
  selector: 'app-modal-voucher-directivos',
  templateUrl: './modal-voucher-directivos.component.html',
  styleUrl: './modal-voucher-directivos.component.css'
})
export class ModalVoucherDirectivosComponent {
  @Input() voucher: any;
  @Output() emitidor = new EventEmitter<any>();
  constructor(private generales: GeneralesService){}

  ngOnInit(): void {
  }

  emitir(){
    this.emitidor.emit(this.voucher);
  }

  cerrar(){
    this.generales.cerrarModal();
  }
}
