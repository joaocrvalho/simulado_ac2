import { Component } from '@angular/core';
import { TarefaService, Tarefa } from '../tarefa-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css',
})

export class CadastrarTarefa {
  
  nomeTarefa: string = ""
  dataTarefa: string = ""

  constructor(private TarefaService: TarefaService) {}

  add()
  {
    const tarefa: Tarefa = {nome: this.nomeTarefa, data: this.dataTarefa};

    this.TarefaService.adicionar(tarefa)

    this.nomeTarefa = ""
    this.dataTarefa = ""
  }

}
