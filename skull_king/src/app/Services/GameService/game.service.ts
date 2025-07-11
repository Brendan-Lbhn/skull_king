import { Injectable } from '@angular/core';
import { Card } from '../../Models/card';
import {Player} from "../../Models/player";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  deck: Card[] = [];
  players: Player[] = [];
  round: number = 1;

  constructor() { }

  dealCards(){
    for(let i:number = 0; i < this.round; i++){
      this.players.forEach((player) => {
        const randomNumber = Math.floor(Math.random() * 74);
        player.hand.push(this.deck[randomNumber])
        this.deck.splice(randomNumber, 1)
      })
    }
  }

  initDeck(){
    let piratesNames: string[] = ['rosie', 'juanita', 'will', 'rascal', 'harry'];
    let mermaidsNames: string[]=  ['circé','alyra'];
    let colors: string[] = ['purple', 'yellow', 'green', 'black']

    //Initialisation des cartes de couleur
    colors.forEach((color) => {
      for(let i = 1; i < 15; i++){
        this.deck.push(new Card(i + color, i, color, ''));
      }
    })

    //Initialisation des cartes pirates
    piratesNames.forEach((pirateName) => this.deck.push(new Card('p_' + pirateName, 0, 'red', pirateName)));

    //Initialisation des cartes sirènes
    mermaidsNames.forEach((mermaidName)=> this.deck.push(new Card('m_' + mermaidName, 0, 'turquoise','')));

    //Initialisation des cartes butin
    for(let i = 0; i<2 ;i++){
      this.deck.push(new Card('l_'+i, 0, 'grey', ''))
    }

    //Initialisation des cartes fuite
    for(let i = 0; i<5 ;i++){
      this.deck.push(new Card('e_'+i, 0, 'blue', ''))
    }

    //Initialisation des autres cartes
    this.deck.push(new Card('whale', 0, 'white', ''));
    this.deck.push(new Card('kraken', 0, 'crimson', ''));
    this.deck.push(new Card('tigress', 0, 'red', ''));
    this.deck.push(new Card('skull_king', 0, 'black', ''));

  }
}
