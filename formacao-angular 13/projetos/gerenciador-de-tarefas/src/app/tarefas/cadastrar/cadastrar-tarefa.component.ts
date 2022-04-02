import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Tarefa, TarefaService } from './../shared/';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;//view child vai fazer a referencia ao form
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void{
    if (this.formTarefa.form.valid) {//faz a validação do formulario
      this.tarefaService.cadastrar(this.tarefa);//cadastra a tarefa usando o serviço
      this.router.navigate(["/tarefas"]);//volta pra pagina inicial após cadastrar a tarefa
    }
  }

}


