import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[] = [
    { codEditora: 1, nome: 'HarperCollins' },
    { codEditora: 2, nome: 'Record' },
    { codEditora: 3, nome: 'Rocco' },
  ];

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}