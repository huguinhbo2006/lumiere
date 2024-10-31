import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrl: './busquedas.component.css'
})
export class BusquedasComponent {
  @Output() emitidor = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  emitir(){
    this.emitidor.emit(false);
  }
}
