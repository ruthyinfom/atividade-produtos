import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto-component/produto-component';

export const routes: Routes = [
    {path: "produtos", component: ProdutoComponent }, 
    { path: "", redirectTo: "/produtos", pathMatch: "full"}
];
