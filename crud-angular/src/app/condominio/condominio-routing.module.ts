import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CondominioComponent } from './condominio/condominio.component';
import { CondominioFormComponent } from './condominio-form/condominio-form.component';

const routes: Routes = [
  { path: '', component: CondominioComponent },
  { path: 'new', component: CondominioFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CondominioRoutingModule { }
