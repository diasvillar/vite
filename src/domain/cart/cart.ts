import { Pedido } from '../../domain/pedido/pedido'

export class Cart{
    constructor(
        public id: string,
        public pedidos: Pedido[],
        public usuario: string,
        public valor_total: number,
        public nome: string,
        public email: string,
        //public observacao: string,
        public metodo: string,
        public retirada: string,
        public horario: string,
        public dezPorCento: number
    ){}
}