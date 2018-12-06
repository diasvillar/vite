export class CardapioGeral{
    constructor(
        public id: string,
        public restaurante_id: string,
        public categoria: string,
        public descricao: string,
        public nome: string,
        public preco: number,
        public img_url: string,
        public tempo: number,
        public tempo_min: string,
        public tempo_max: string
    ){}

}