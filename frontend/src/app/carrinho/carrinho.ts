import { Component, computed, effect, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  protected carrinhoService = inject(CarrinhoService)

  constructor() {}
}
