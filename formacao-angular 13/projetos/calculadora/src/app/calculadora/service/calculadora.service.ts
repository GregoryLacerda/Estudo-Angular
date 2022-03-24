/**
 * Servicço responsavel por executar as operações da calculadora
 * @author Gregory Lacerda <gregorylacerda@hotmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

//anotação significa que o angular faz a injeção de dependencias automaticamente
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  //static ajuda a acessar a contante sem precisar instanciar a classe
  /* Define as contantes utilizadas
      para identificar as operações de cálculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() {   }

  /**
   * Método que clacula uma operação matemática dado dois números.
   * Suporta as operações soma, subtração, divisão e multiplicação
   * 
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @returns number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }

    return resultado;

  }
}
