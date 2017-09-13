
export class Customer {
    public id: string;
    public name: string;
    public address: string;
    public phone: string;
    public customerType: number;
    public lastBought: number;
    public facebook: FacebookInfo;
}

export class FacebookInfo {
    constructor (
        public name:string,
        public avarta:string,
        public id:string,
        public messageId:string
    ) {}

}