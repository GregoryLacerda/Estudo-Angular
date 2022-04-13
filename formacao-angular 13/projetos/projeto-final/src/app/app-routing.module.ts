import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CalculadoraRoutes } from "./calculadora";
import { ConversorRoutes } from "./conversor";
import { DashboardRoutes } from "./dashboard";
import { JogoDaVelhaRoutes } from "./jogo-da-velha";
import { TarefaRoutes } from "./tarefas";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConversorRoutes,
    ...TarefaRoutes,
    ...JogoDaVelhaRoutes
];

@NgModule({
    imports: [
        //informa que essa será a entrada principal e será apenas essa instancia da classe RouterModule
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}