import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {
  @Input() color = '';
  @Input() encabezado = '';
  @Input() colorLetra = '';
  constructor() { }

  ngOnInit(): void {
  }

}
