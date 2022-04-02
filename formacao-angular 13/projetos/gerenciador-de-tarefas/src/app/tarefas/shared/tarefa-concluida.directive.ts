import { Directive, ElementRef, Input, OnInit } from '@angular/core';

//a diretiva gera um atributo html, usada para aplicar uma operação especifica
@Directive({
  selector: '[tarefaConcluida]'
})

export class TarefaConcluidaDirective implements OnInit{

  @Input() tarefaConcluida: boolean;//o input vai informar o valor, para facilitar precisa ter o mesmo nome da diretiva

  constructor(private el: ElementRef) { }

  ngOnInit(){
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
