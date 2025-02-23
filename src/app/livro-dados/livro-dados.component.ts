import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  editoras: Editora[] = [];
  livro: Livro = {
    codigo: 0,
    titulo: '',
    resumo: '',
    autores: [],
    codEditora: 0, // Armazena o código da editora selecionada
  };
  autoresInput: string = '';

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    console.log(this.editoras);
  }

  incluir(): void {
    this.livro.autores = this.autoresInput.split(',').map((autor) => autor.trim());
    this.livro.codEditora = +this.livro.codEditora; // Converte para número. o erro é o codEditora era tratado como string quando chamava o método incluir. com essa linha de código this.livro.codEditora = +this.livro.codEditora; ele passa a ser tratado como número. e isso resolve o problema. 
    console.log('Editora selecionada antes de incluir:', this.livro.codEditora);
    this.servLivros.incluirLivro(this.livro);
    console.log('Livro incluído:', this.livro);
    this.livro = {
      codigo: 0,
      titulo: '',
      resumo: '',
      autores: [],
      codEditora: 0
    };
    this.autoresInput = '';
  }

  logEditora() {
    console.log("Editora selecionada agora:", this.livro.codEditora);
  }
}