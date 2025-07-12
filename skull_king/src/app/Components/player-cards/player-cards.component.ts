import {Component} from '@angular/core';
import {Card} from '../../Models/card';
import {GameService} from '../../Services/GameService/game.service';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-player-cards',
    imports: [
        NgForOf
    ],
    templateUrl: './player-cards.component.html',
    styleUrl: './player-cards.component.less'
})
export class PlayerCardsComponent {
  playerId: string = '';
  playersDeck: Card[] | undefined = [];


  constructor(public gameService: GameService) {

  }

  ngOnInit(){
    // On s'abonne à un flux de la classe GameService
    this.gameService.gameReady$.subscribe(ready=>{
      if(ready){
        this.showPlayersDeck()
      }
    })
  }

  showPlayersDeck() {
    const idPlayer: string = sessionStorage.getItem('idPlayer') ?? '';
      this.playersDeck = this.gameService.players.find((player) => player.id === parseInt(idPlayer))?.hand;
  }


}
