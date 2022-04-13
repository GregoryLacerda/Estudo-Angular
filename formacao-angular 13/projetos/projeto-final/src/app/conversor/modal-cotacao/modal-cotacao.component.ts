import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Conversao, ConversaoResponse } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  //anotação para receber os parametros que vem externamente, de outro component
  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao;
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();//e um output, um retorno para o component pai

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
  }

  novaConsulta(){
    this.onConfirm.emit();//ao chamar o metodo ele executa o metodo do component pai que foi passado
  }

  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }
    return (this.conversao.valor * this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
  }

  get cotacaoPara(): number{
    return this.conversorService.cotacaoPara(
      this.conversaoResponse, this.conversao
    );
  }

  get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(
      this.conversaoResponse, this.conversao
    );
  }

  get dataCotacao(): string{
    return this.conversorService.dataCotacao(
      this.conversaoResponse
    );
  }

}
