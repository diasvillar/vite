import { CardapioCafe } from '../../domain/cardapioCafe/cardapioCafe'
import { CardapioGeral } from '../cardapioGeral/cardapioGeral';

export class Pedido{
    constructor(
        public cardapio: CardapioCafe,
        public cardapioGeral: CardapioGeral,
        public quantidade: number,
        public metodo: string,
        public observacao: string,
        public acrescimoTotal: number
    ){}
}