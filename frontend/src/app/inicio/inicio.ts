import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoComponent } from '../produto-component/produto-component';
import { CarrinhoService } from '../carrinho-service';

@Component({
  selector: 'app-inicio',
  imports: [ProdutoComponent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  #carrinho = inject(CarrinhoService);
  #router = inject(Router);

  protected qtdItens = computed(() =>
    this.#carrinho.itens().reduce(
      (total, item) => total + item.quantidade,
      0
    )
  );

  irCarrinho() {
    this.#router.navigate(['/carrinho']);
  }

}