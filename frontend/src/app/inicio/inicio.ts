import { Component, inject, signal } from '@angular/core';
import { ProdutoService } from '../produto-service';
import { CarrinhoService } from '../carrinho-service';
import { Produto } from '../produto';
import { Carrinho } from '../carrinho/carrinho';

@Component({
  selector: 'app-inicio',
  imports: [Carrinho],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  #produto = inject(ProdutoService)
  #carrinho = inject(CarrinhoService)

  protected readonly produtos = signal<Produto[]>([])

  constructor() {
    this.#produto.obterProdutos().subscribe(prods => {
      this.produtos.set(prods)
    })
  }

  adicionar(p: Produto) {
  this.#carrinho.adicionarItem(p);
}
}