
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import { CalculadoraService } from './service';


@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [//importante colocar o service como um provider para o angular saber que vai ser um provedor, vai ser utilizado
    CalculadoraService
  ]
})
export class CalculadoraModule { }
