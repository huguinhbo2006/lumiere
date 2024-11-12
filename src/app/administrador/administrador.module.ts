import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSearchModule } from '../ui-search/ui-search.module';
import { CobroNominasComponent } from './cobro-nominas/cobro-nominas.component';
import { CorteCajaComponent } from './corte-caja/corte-caja.component';
import { CursosCongeladosComponent } from './cursos-congelados/cursos-congelados.component';



@NgModule({
  declarations: [
  
    CobroNominasComponent,
       CorteCajaComponent,
       CursosCongeladosComponent
  ],
  imports: [
    CommonModule,
    UiSearchModule
  ]
})
export class AdministradorModule { }
