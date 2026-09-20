import { Injectable, signal } from '@angular/core';
import { Produto } from './produto';

export type Item = {
  id: number;
  produto: Produto;
  quantidade: number;
};

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens = signal<Item[]>([]);

  adicionarItem(produto: Produto) {
    const itemExistente = this.itens().find(
      item => item.produto.id === produto.id
    );

    if (itemExistente) {
      this.aumentarQuantidade(itemExistente.id);
    } else {
      this.itens.update(itens => [
        ...itens,
        {
          id: produto.id,
          produto: produto,
          quantidade: 1
        }
      ]);
    }
  }

  aumentarQuantidade(id: number) {
    this.itens.update(itens =>
      itens.map(item =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  diminuirQuantidade(id: number) {
    this.itens.update(itens =>
      itens
        .map(item =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter(item => item.quantidade > 0)
    );
  }

  removerItem(id: number) {
    this.itens.update(itens =>
      itens.filter(item => item.id !== id)
    );
  }

  obterTotal(): number {
    return this.itens().reduce(
      (total, item) => total + item.produto.preco * item.quantidade,
      0
    );
  }
}