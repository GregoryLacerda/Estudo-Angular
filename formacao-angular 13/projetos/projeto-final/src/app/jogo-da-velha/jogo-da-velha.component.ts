
import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela inicial deve ser exibida.
   * 
   * @return boolean
   */
  get showInicio(): boolean{
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
   get showTabuleiro(): boolean{
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela fim de jogo deve ser exibida.
   * 
   * @return boolean
   */
   get showFinal(): boolean{
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo
   * 
   * @return void
   */
   iniciarJogo($event: any): void {
    $event.preventDefault();
    this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar em local no tabuleiro
   * 
   * @param number posX 
   * @param number posY 
   */
  jogar(posX: number, posY: number): void{
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna de a peça X deve ser exibida para a 
   * coordenada informada
   * 
   * @param number posX 
   * @param number posY 
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna de a peça O deve ser exibida para a 
   * coordenada informada
   * 
   * @param number posX 
   * @param number posY 
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcaçao de vitoria deve ser exibida para a 
   * coordenada informada
   * 
   * @param number posX 
   * @param number posY 
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o numero do jogador a jogar.
   * 
   * @return number
   */
  get jogador(): number{
    return this.jogoDaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo
   * 
   * @return void
   */
   novoJogo($event): void {
    $event.preventDefault();
    this.jogoDaVelhaService.novoJogo();
  }

}
