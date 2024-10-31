import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesWebComponent } from './componentes-web/componentes-web.component';
import { ModalComponenteWebComponent } from './componentes-web/modales/modal-componente-web/modal-componente-web.component';
import { UiSearchModule } from '../ui-search/ui-search.module';
import { ModulosComponent } from './modulos/modulos.component';
import { ModalOpcionComponent } from './modulos/modales/modal-opcion/modal-opcion.component';
import { ModalModuloComponent } from './modulos/modales/modal-modulo/modal-modulo.component';
import { PaginasComponent } from './paginas/paginas.component';
import { ModalPaginaComponent } from './paginas/modales/modal-pagina/modal-pagina.component';



@NgModule({
  declarations: [
    ComponentesWebComponent,
    ModalComponenteWebComponent,
    ModulosComponent,
    ModalOpcionComponent,
    ModalModuloComponent,
    PaginasComponent,
    ModalPaginaComponent
  ],
  imports: [
    CommonModule,
    UiSearchModule
  ]
})
export class DesarrolloModule { }
