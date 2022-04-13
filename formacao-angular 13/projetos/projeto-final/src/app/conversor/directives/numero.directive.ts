import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }],
})
export class NumeroDirective implements ControlValueAccessor{

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  //escuta um evento sempre quando for precinado e solta a tecla, keyup é sempre depois que solta a tecla e keydown quando aperta
  @HostListener('keyup', ['$event'])
   onKeyUp($event: any){
    let valor = ($event.target as HTMLInputElement).value;//obtem o valor do campo de texto
    let posDecimais = valor.indexOf('.');//permite 1 ponto, verifica a posição do ponto

    valor = valor.replace(/[\D]/g, '');//remove tudo que não for numero usando uma expressão regular

    if (posDecimais > 0) {
      valor = valor.substring(0, posDecimais) + '.' + valor.substring(posDecimais);
    }

    /*erro de cannot set property é porque precisa informar qual o tipo de elementhtml
    usando o as HTMLInputElement informado o typescript que é um input*/
    ($event.target as HTMLInputElement).value = valor;
    this.onChange(valor);
  }

  /**
   * Registra função a ser chamado para atualizar o valor na model
   * 
   * @param any fn 
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registra a função a ser chaamda para atualizar o
   * valor na model para evento touched
   * 
   * @param any fn 
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Obtem o valor contido na model
   * 
   * @param any value 
   */
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
