import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Produto } from './produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  readonly API = 'http://localhost:3000';
  readonly #http = inject(HttpClient);

  obterTodos(): Observable<Produto[]> {
    return this.#http.get<Produto[]>(`${this.API}/produtos`);
  }
}