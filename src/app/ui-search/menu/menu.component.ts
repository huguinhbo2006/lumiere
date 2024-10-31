import { Component, Input } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';
declare function mostrarMenu(): void;
declare function ocultarMenu(): void;
declare function menuEstatus(): boolean;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  logo: any;
  @Input() menus: any;
  abierto = false;
  constructor(private generales: GeneralesService){}

  ngOnInit(): void {
    this.logo = this.generales.logo;
  }

  seleccionar(seleccion: any){
    this.menus.forEach((menu: any) => {
      if(menu.id === seleccion.id){
        menu.seleccionado = !menu.seleccionado;
      }
    });
  }
  

  menu(){
    this.abierto = menuEstatus();
    (this.abierto) ? ocultarMenu() : mostrarMenu();
  }
}
