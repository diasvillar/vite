export class Cpagamento{
    constructor(
        public id: number,
        public idUser: number,
        public payment_method_code : string,
        public payment_company_code : string,
        public holder_name : string,
        public card_cvv : string,
        public card_expiration : string,
        public card_number : string
        ){}
    }