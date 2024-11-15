import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSearchModule } from '../ui-search/ui-search.module';
import { CobroNominasComponent } from './cobro-nominas/cobro-nominas.component';
import { CorteCajaComponent } from './corte-caja/corte-caja.component';
import { CursosCongeladosComponent } from './cursos-congelados/cursos-congelados.component';
import { EgresosAdministrativosComponent } from './egresos-administrativos/egresos-administrativos.component';
import { DirectivosModule } from "../directivos/directivos.module";
import { EmisionValesComponent } from './emision-vales/emision-vales.component';
import { ModalValeAdministrativosComponent } from './emision-vales/modales/modal-vale-administrativos/modal-vale-administrativos.component';



@NgModule({
  declarations: [
  
    CobroNominasComponent,
       CorteCajaComponent,
       CursosCongeladosComponent,
       EgresosAdministrativosComponent,
       EmisionValesComponent,
       ModalValeAdministrativosComponent
  ],
  imports: [
    CommonModule,
    UiSearchModule,
    DirectivosModule
]
})
export class AdministradorModule { }
