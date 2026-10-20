import { Component } from '@angular/core';
import { TarefaService, Tarefa } from '../tarefa-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-tarefas',
  imports: [RouterLink],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css',
})
export class ListaTarefas {

  tarefas: Tarefa[]= []

  riscar = false

  constructor(private TarefaService: TarefaService){
    this.tarefas = this.TarefaService.listar()
  }

  remover(){
    this.TarefaService.remover();
  }

}
