import { Injectable } from '@angular/core';

export type Tarefa = {nome: string; data:string}

@Injectable({
  providedIn: 'root',
})

export class TarefaService {
  
  tarefas: Tarefa[] = []

  listar(): Tarefa[]{
    return this.tarefas;
  }

  adicionar(item: Tarefa) {
    this.tarefas.push(item);
  }

  remover(){
    this.tarefas.pop();
  }

}
