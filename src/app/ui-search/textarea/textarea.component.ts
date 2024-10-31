import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css'
})
export class TextareaComponent {
  @Input() obligatorio = false;
  @Input() id = '';
  @Input() etiqueta = '';
  @Input() place = '';
  @Input() activo = false;
  @Input() valor = '';
  @Output() emitidor = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  emitir(){
    this.emitidor.emit(this.valor);
  }
}
