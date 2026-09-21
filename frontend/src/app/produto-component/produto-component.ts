import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';
import { CarrinhoService, Item } from '../carrinho-service';

@Component({
  selector: 'app-produto-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.css'
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private cdr: ChangeDetectorRef,
    private carrinho: CarrinhoService
  ) {}

  ngOnInit(): void {

    console.log('ProdutoComponent foi carregado!');

    this.produtoService.obterProdutos().subscribe({
      next: (dados) => {

        console.log('PRODUTOS RECEBIDOS:', dados);
        console.log('QUANTIDADE:', dados.length);
        console.log('TIPO:', typeof dados);

        this.produtos = dados;

        this.cdr.detectChanges();
      },

      error: (erro) => {
        console.error('ERRO AO BUSCAR PRODUTOS:', erro);
      }
    });

  }

  adicionar(p: Produto) {
    if (p) {
      let it: Item = {
        id: p.id,
        produto: p,
        quantidade: 1 
      }
      this.#carrinho.adicionarItem(it)
    }
    console.log(this.#carrinho.itens())
  }
}
