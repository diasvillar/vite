export class CardapioCafe{
    constructor(
        public id: string,
        public restaurante_id: string,
        public categoria_superior: string,
        public descricao_categoria: string,
        public nome: string,
        public preco: number,
        public descricao_sub_categoria: string
    ){}

}