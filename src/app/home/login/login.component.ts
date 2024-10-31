import { Component } from '@angular/core';
import { GeneralesService } from '../../servicios/generales.service';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = '';
  password = '';
  token = '';
  select = false;
  lista: any;
  constructor(private generales: GeneralesService,
              private login: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  getToken() {
    this.login.getToken(this.usuario, this.password).subscribe((respuesta: any) => {
      localStorage.setItem('token', respuesta['token']);
      localStorage.setItem('usuario', this.usuario);
      this.router.navigate(['admin']);
    },
    error => {
      this.generales.interpretarError(error);
    });
  }
}
