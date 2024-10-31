import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';
declare function base64(archivo: File): any;

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  @Input() etiqueta = '';
  @Input() id = '';
  @Input() place = '';
  @Input() tipo = '';
  @Input() activo = false;
  @Input() valor = '';
  @Input() imagen = './assets/img/usuario.png';
  @Output() emitidor = new EventEmitter<any>();
  constructor(private generales: GeneralesService) { }

  ngOnInit() {
  }

  emitir(value: any) {
    let imagen = base64(value.files[0]);
    this.emitidor.emit(imagen);
  }
}
