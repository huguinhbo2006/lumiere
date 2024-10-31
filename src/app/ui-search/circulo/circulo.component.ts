import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.css']
})
export class CirculoComponent implements OnInit {
  @Input() cantidad: any;
  @Input() forma: any;
  constructor() { }

  ngOnInit(): void {
  }

}
