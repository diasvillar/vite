export class Pagamento{
    constructor(
        public customer_id: number,
        public payment_method_code: string,
        public product_id: number,
        public amount: number,
        public holder_name: string,
        public card_expiration: string,
        public card_number: string,
        public card_cvv: string,
        public payment_company_code: string
    ){}
}