import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CondominioRoutingModule } from './condominio-routing.module';
import { CondominioComponent } from './condominio/condominio.component';
import { CondominioFormComponent } from './condominio-form/condominio-form.component';

@NgModule({
  declarations: [
    CondominioComponent,
    CondominioFormComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    CondominioRoutingModule,
    SharedModule
  ]
})

export class CondominioModule { }
