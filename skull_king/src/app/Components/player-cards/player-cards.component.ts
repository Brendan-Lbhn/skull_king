import { Component } from '@angular/core';
import { Card } from '../../Models/card';
import { GameService } from '../../Services/GameService/game.service';

@Component({
  selector: 'app-player-cards',
  standalone: true,
  imports: [],
  templateUrl: './player-cards.component.html',
  styleUrl: './player-cards.component.less'
})
export class PlayerCardsComponent {
  playerId: string = '';
  playersDeck: Card[] = [];

  constructor(public gameService: GameService) {

  }

  setPlayerId() {
    let sessionStoragePlayerId = sessionStorage.getItem('idPlayer');
    if (typeof sessionStoragePlayerId !== 'undefined' && sessionStoragePlayerId !== null) {
      this.playerId = sessionStoragePlayerId;

    }
  }

  setPlayersCards() {
    this.gameService.players.find((element) => element.id = parseInt(this.playerId))?.hand
  }


}
