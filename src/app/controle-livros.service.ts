import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[] = [
    { codigo: 1,
      codEditora: 1,
      titulo: 'Memórias da Segunda Guerra Mundial',
      resumo: 'Memórias da Segunda Guerra Mundial é um livro escrito pelo ex-primeiro-ministro britânico Winston Churchill, que serviu como líder do Reino Unido durante a Segunda Guerra Mundial. Publicado em 1959, a obra é uma narrativa detalhada dos acontecimentos históricos da guerra, bem como uma reflexão pessoal sobre a liderança de Churchill durante o conflito. Churchill, que é considerado um dos maiores líderes políticos e militares da história do Reino Unido, foi um defensor ferrenho da resistência contra a Alemanha nazista. Ao longo do livro, Churchill descreve a situação política e militar da época, incluindo os preparativos para a guerra, as batalhas mais importantes, como a Batalha da Inglaterra e a invasão da Normandia, e a colaboração entre os Aliados para derrotar a Alemanha nazista. ',
      autores: ['Winston Churchill']
    },
    { codigo: 2,
      codEditora: 2,
      titulo: 'A Segunda Guerra Mundial',
      resumo: 'A Segunda Guerra Mundial de Antony Beevor é um livro que aborda o conflito que ocorreu entre 1939 e 1945 de forma abrangente e detalhada. Beevor começa explicando as causas da guerra, descreve as principais batalhas e eventos que ocorreram em cada frente de guerra, analisa as estratégias militares e políticas dos países envolvidos, e apresenta as consequências da guerra para o mundo, incluindo o impacto sobre a política, a economia e a sociedade.',
      autores: ['Antony Beevor']
    },
    { codigo: 3,
      codEditora: 3,
      titulo: 'É Isto um Homem?',
      resumo: 'É Isto um Homem? de Primo Levi é um livro sobre a Segunda Guerra Mundial que tem um caráter autobiográfico e narra a experiência do autor como prisioneiro em um campo de concentração nazista durante o período. O livro foi originalmente publicado em italiano em 1947, com o título Se questo è un uomo.',
      autores: ['Primo Levi']
    },
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluirLivro(novoLivro: Livro): void {
    const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    novoLivro.codigo = novoCodigo
    this.livros.push(novoLivro)
  }
  
  // incluirLivro(livro: Livro): void {
  //   livro.codigo = Math.max(...this.livros.map(l => l.codigo), 0) + 1;
  //   this.livros.push(livro);
  // }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
