import { Component } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  constructor(private generales: GeneralesService,
              private router: Router){}

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.generales.cerrarSesion();
    this.router.navigate(['login']);
  }
}
