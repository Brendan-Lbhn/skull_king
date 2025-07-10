import { stringify } from "querystring";

export class Card{
    constructor(
        public id: string,
        public value: number,
        public color: string,
        public power: string
    ){}
}
