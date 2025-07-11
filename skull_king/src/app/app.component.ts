import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameService as GameService } from './Services/GameService/game.service';
import {PlayerLoginComponent} from "./Components/player-login/player-login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  constructor(gameService: GameService){
    gameService.initDeck()
  }
}
