import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../produto-service';
import { Produto } from '../produto';

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
    private cdr: ChangeDetectorRef
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
}
