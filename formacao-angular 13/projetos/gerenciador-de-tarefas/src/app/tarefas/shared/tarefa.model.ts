export class Tarefa {
    //usando o ? informado que será atributos da classe opcionais
    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean
    ){}
}
