import {Card} from "./card";

export class Player{
  hand: Card[] = [];

  constructor(
    public id: number,
    public pseudo: string
  ){
    this.id = id;
    this.pseudo = pseudo;
  }


}
