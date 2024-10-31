import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UiSearchModule } from '../ui-search/ui-search.module';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogosModule } from '../catalogos/catalogos.module';
import { DesarrolloModule } from '../desarrollo/desarrollo.module';
import { DirectivosModule } from '../directivos/directivos.module';


@NgModule({
  declarations: [
    LoginComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiSearchModule,
    CatalogosModule,
    DesarrolloModule,
    DirectivosModule
  ]
})
export class HomeModule { }
