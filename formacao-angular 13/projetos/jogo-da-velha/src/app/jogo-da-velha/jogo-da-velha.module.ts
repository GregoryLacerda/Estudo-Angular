import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';



@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JogoDaVelhaComponent // necessario para que o modulo da aplicação visualize o component
  ],
  providers: [
    JogoDaVelhaService
  ],
})
export class JogoDaVelhaModule { }
