import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CondominioComponent } from './condominio/condominio.component';
import { CondominioFormComponent } from './condominio-form/condominio-form.component';
// import { MembroComponent } from './membro/membro.component';

const routes: Routes = [
  { path: '', component: CondominioComponent },
  { path: 'new', component: CondominioFormComponent },
  // { path: '/membro', component: MembroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CondominioRoutingModule { }
