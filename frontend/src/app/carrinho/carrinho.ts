import { Component, computed, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {

  protected carrinhoService = inject(CarrinhoService);

  quantidadeItens = computed(() => {
    return this.carrinhoService.itens().reduce(
      (total, item) => total + item.quantidade,
      0
    );
  });

}