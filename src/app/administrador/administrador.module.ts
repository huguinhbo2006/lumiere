import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSearchModule } from '../ui-search/ui-search.module';
import { CobroNominasComponent } from './cobro-nominas/cobro-nominas.component';



@NgModule({
  declarations: [
  
    CobroNominasComponent
  ],
  imports: [
    CommonModule,
    UiSearchModule
  ]
})
export class AdministradorModule { }
