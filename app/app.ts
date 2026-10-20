import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaTarefas } from './lista-tarefas/lista-tarefas';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaTarefas, CadastrarTarefa, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula19-10');
}
