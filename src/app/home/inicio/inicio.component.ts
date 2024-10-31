import { Component } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';
import { UsuariosService } from '../../servicios/usuarios.service';
declare function mostrarMenu(): void;
declare function ocultarMenu(): void;
declare function menuEstatus(): boolean;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  menus: any;
  abierto = false;
  sucursales: any;
  sucursal: any;
  constructor(private generales: GeneralesService,
              private usuarios: UsuariosService){}

  ngOnInit(): void {
    this.traerInformacion();
  }

  traerInformacion(){
    this.usuarios.informacion(localStorage.getItem('usuario')).subscribe((respuesta: any) => {
      localStorage.setItem('permisos', respuesta.usuario.idTipoUsuario);
      localStorage.setItem('foto', respuesta.usuario.foto);
      localStorage.setItem('identificador', respuesta.usuario.id);
      localStorage.setItem('nombre', respuesta.usuario.nombre);
      localStorage.setItem('calendario', respuesta.usuario.calendario.calendario);
      localStorage.setItem('ncalendario', respuesta.usuario.calendario.ncalendario);
      
      this.menus = respuesta.permisos;
      this.sucursales = respuesta.sucursales;
      this.sucursal = respuesta.usuario.idSucursal;
    },
    error => {
      this.generales.interpretarError(error);
    });
  }

  cerrarMenu(){
    ocultarMenu();
  }

  abrirMenu(){
    mostrarMenu();
  }

  
}
