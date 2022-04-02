import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }
  
  remover($event: any, tarefa: Tarefa): void{//event é o evento padrão do navegador, será usado para que não aconteça nada ao clicar
    $event.preventDefault();//desabilita a ação de atulizar a pagina
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '" ?')) {//confirm é um alerta do navegador que vai retornar true se clicar em ok e false se cancelar
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '" ?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
