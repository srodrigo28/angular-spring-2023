import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // passo 1
  // { path: '', pathMatch: 'full', redirectTo: 'courses' },
  // { path: 'courses',  loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },

  // passo 2
  { path: '', pathMatch: 'full', redirectTo: 'produtos' },
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) }

  // passo 3
  // { path: '', pathMatch: 'full', redirectTo: 'clientes' },
  // { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
