import { Component, inject, signal } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { CarrinhoService } from '../carrinho-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  #produto = inject(ProdutoService)
  #carrinho = inject(CarrinhoService)

  protected readonly produtos = signal<Produto | undefined>(undefined)

  constructor() {
    this.#produto.obterProdutos().subscribe(prods => {
      this.produtos.set(prods)
    })
  }
}
