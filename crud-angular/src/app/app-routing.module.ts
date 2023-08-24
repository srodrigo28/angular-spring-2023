import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '/cursos', pathMatch: 'full', redirectTo: 'courses' },
  // { path: 'courses',  loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },

  // { path: '', pathMatch: 'full', redirectTo: 'produtos' },
  // { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) }

  { path: '', pathMatch: 'full', redirectTo: 'clientes' },
  { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
