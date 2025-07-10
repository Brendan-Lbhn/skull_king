import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameServiceService as GameService } from './Services/GameService/game-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {

  constructor(gameService: GameService){
    gameService.initDeck()
  }
}
