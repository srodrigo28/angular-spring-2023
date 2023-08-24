import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ClientesRoutingModule,
  ]
})
export class ClientesModule { }
