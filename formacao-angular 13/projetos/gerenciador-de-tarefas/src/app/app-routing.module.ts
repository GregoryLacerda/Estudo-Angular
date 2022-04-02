import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TarefaRoutes } from "./tarefas";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes // os ... permite concatenar os arrays
];

@NgModule({
    //forRoot serve pra que o modulo de rotas seja unico em toda a palicação, 
    //só ele será responsavel por gerenciar as rotas
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}