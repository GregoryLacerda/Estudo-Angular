import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];//pega a lista de tarefas usando a chave valor 'tarefas'
    return tarefas ? JSON.parse(tarefas) : [];//operador ternario para retornar a lista d tarefas em json caso exista tarefas ou uma lista vazia caso não exista
                      //json transformando de string para o formato Json
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();//gerando um id com o numero de segundos
    tarefas.push(tarefa);//salvando a tarefa recebida no metodo no final da lista de tarefas
    localStorage['tarefas'] = JSON.stringify(tarefas);// adicionado todas as tarefas no local storage com o json passando para string
  }

  buscarPorId(id: number): Tarefa{
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);//find com a condição para verificar se a tarefa que está iterando tem id igual alguma tarefa da lista, quando encontrar, retorna a tarefa

  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {// obj: a tarefa, index: posição da tarefa, objs: a lista das tarefas
      if (tarefa.id === obj.id) {//se os ids forem iguais a tarefa naquele index que é igual é substituida pela nova
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);// atualiza todas as tarefas
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();// o let para ser possivel alterar a variavel diferente de const que não permite
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);//filtra na lista para que a variavel receba apenas as tarefas que são diferentes de id
    localStorage['tarefas'] = JSON.stringify(tarefas);//salva toda a lista de tarefas com as filtradas
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {//percorre a lista de taferas para fazer a comparação abaixo
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;//  !obj.concluida para inverter o valor que estava 
      }      
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);//salva todas as listas novamente
  }

}
