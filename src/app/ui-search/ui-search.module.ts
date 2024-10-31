import { NgModule, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraPrincipalComponent } from './barra-principal/barra-principal.component';
import { CargandoComponent } from './cargando/cargando.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { ChecktimesComponent } from './checktimes/checktimes.component';
import { DatatableComponent } from './datatable/datatable.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { MenuComponent } from './menu/menu.component';
import { MenuOptionComponent } from './menu-option/menu-option.component';
import { SubmenuOptionComponent } from './submenu-option/submenu-option.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioSucursalesComponent } from './usuario-sucursales/usuario-sucursales.component';
import { DragComponent } from './drag/drag.component';
import {DragDrop, DragDropModule} from '@angular/cdk/drag-drop';
import { BotonesComponent } from './botones/botones.component';
import { FileComponent } from './file/file.component';
import { ImagenComponent } from './imagen/imagen.component';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CirculoComponent } from './circulo/circulo.component';
import { CardComponent } from './card/card.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
    BarraPrincipalComponent,
    CargandoComponent,
    CheckboxComponent,
    ChecktimesComponent,
    DatatableComponent,
    PaginadorComponent,
    InputComponent,
    SelectComponent,
    MenuComponent,
    MenuOptionComponent,
    SubmenuOptionComponent,
    ModalComponent,
    UsuarioComponent,
    UsuarioSucursalesComponent,
    DragComponent,
    BotonesComponent,
    FileComponent,
    ImagenComponent,
    BusquedasComponent,
    TextareaComponent,
    CirculoComponent,
    CardComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DragDropModule
    
  ],
  exports: [
    BarraPrincipalComponent,
    CargandoComponent,
    CheckboxComponent,
    ChecktimesComponent,
    PaginadorComponent,
    DatatableComponent,
    InputComponent,
    SelectComponent,
    MenuComponent,
    MenuOptionComponent,
    SubmenuOptionComponent,
    ModalComponent,
    UsuarioComponent,
    UsuarioSucursalesComponent,
    DragComponent,
    BotonesComponent,
    FileComponent,
    ImagenComponent,
    BusquedasComponent,
    TextareaComponent,
    CirculoComponent,
    CardComponent,
    ProgressComponent
  ]
})
export class UiSearchModule { }
