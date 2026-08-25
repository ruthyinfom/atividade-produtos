import { Component, inject } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-component',
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.css'
})
export class ProdutoComponent {

  produtos: Produto[] = [];

  readonly #produtoService = inject(ProdutoService);

  ngOnInit() {
    this.#produtoService.obterTodos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      }
    });
  }
}