import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  @Output() emitidor = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  emitir(){
    this.emitidor.emit(false);
  }
}
