import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto-component/produto-component';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [
    {path: "produtos", component: Inicio },
    {path: "produtos", component: ProdutoComponent }, 
    { path: "", redirectTo: "/produtos", pathMatch: "full"}
];
