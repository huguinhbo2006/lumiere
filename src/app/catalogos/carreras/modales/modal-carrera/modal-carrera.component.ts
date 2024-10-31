import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GeneralesService } from '../../../../servicios/generales.service';

@Component({
  selector: 'app-modal-carrera',
  templateUrl: './modal-carrera.component.html',
  styleUrl: './modal-carrera.component.css'
})
export class ModalCarreraComponent {
  @Output() emitidor = new EventEmitter<any>();
  @Input() dato = {
    nombre: '',
    idUniversidad: 0,
    idCentroUniversitario: 0,
    puntaje: '',
    aspirantes: '',
    admitidos: '',
    rechazados: ''
  };
  @Input() listas = {
    universidades: [],
    centrosUniversitarios: []
  };
  centros: any;
  @Input() modificar = false;
  constructor(private generales: GeneralesService) { }
  
  ngOnInit(): void {
  }

  buscar(){
    this.dato.idCentroUniversitario = 0;
    this.centros = this.generales.sublista(this.listas.centrosUniversitarios, this.dato.idUniversidad, 'idUniversidad');
  }
  
  emitir() {
    this.emitidor.emit(this.dato);
  }
  
  cerrar() {
    this.generales.cerrarModal();
  }
}
