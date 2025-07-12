import { Injectable } from '@angular/core';
import { Card } from '../../Models/card';
import {Player} from "../../Models/player";
import {BehaviorSubject} from "rxjs";
import {type} from "os";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  deck: Card[] = [];
  players: Player[] = [];
  playedCards: Card[] = [];
  activePLayer: Player | undefined = undefined;
  round: number = 0;

  constructor() { }

  private gameReadySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  gameReady$ = this.gameReadySubject.asObservable();

  //Distribue les cartes aux différents joueurs
  dealCards(){
    this.round++;
    this.setActivePlayer();
    for(let i:number = 0; i < this.round; i++){
      this.players.forEach((player) => {
        const randomNumber = Math.floor(Math.random() * 74);
        player.hand.push(this.deck[randomNumber])
        this.deck.splice(randomNumber, 1)
        this.gameReadySubject.next(true);
      })
    }
  }

  setActivePlayer(){
    if(typeof this.activePLayer === 'undefined' || this.activePLayer.id === this.players.length ){
      this.activePLayer = this.players[0];
    }else{
      this.activePLayer = this.players[this.activePLayer.id + 1];
    }
  }

  //Intialise le jeu de 74 cartes
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
