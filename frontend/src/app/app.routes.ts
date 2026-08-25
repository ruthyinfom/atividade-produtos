import { Routes } from '@angular/router';
import { LojaFront } from './loja-front/loja-front';

export const routes: Routes = [
    {path: "produtos", component: LojaFront }, 
    { path: "", redirectTo: "/produtos", pathMatch: "full"}
];
