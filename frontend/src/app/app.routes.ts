import { Routes } from '@angular/router';

import { Inicio } from './inicio/inicio';
import { Carrinho } from './carrinho/carrinho';

export const routes: Routes = [
  {
    path: 'produtos',
    component: Inicio
  },
  {
    path: 'carrinho',
    component: Carrinho
  },
  {
    path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];