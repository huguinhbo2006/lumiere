import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrl: './menu-option.component.css'
})
export class MenuOptionComponent {
  @Input() menu: any;
  @Output() emitidor = new EventEmitter<any>();
  constructor(private generales: GeneralesService){}

  ngOnInit(): void {
  }

  emitir(){
    this.emitidor.emit(this.menu);
  }
}
