import { Component, Input } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';

@Component({
  selector: 'app-submenu-option',
  templateUrl: './submenu-option.component.html',
  styleUrl: './submenu-option.component.css'
})
export class SubmenuOptionComponent {
  @Input() submenu: any;
  constructor(private generales: GeneralesService){}
}
