import { Component, signal } from '@angular/core';
import { ProdutoComponent } from "./produto-component/produto-component";

@Component({
  selector: 'app-root',
  imports: [ProdutoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
