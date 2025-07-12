import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GameService} from "../../Services/GameService/game.service";
import {Player} from "../../Models/player";


@Component({
    selector: 'app-player-login',
    imports: [
    FormsModule
],
    templateUrl: './player-login.component.html',
    styleUrl: './player-login.component.less'
})
export class PlayerLoginComponent {
  pseudo: string = '';
  showPopin: boolean= false;
  playersToker :number[] = [8,7,6,5,4,3,2,1]

  @ViewChild('pseudoInputElement') pseudoInputElement!: ElementRef<HTMLInputElement>;

  constructor(public gameService: GameService) {
    this.showPopin = true;
  }

  addPlayerAndValidateForm() {
    this.addPlayer();
    this.showPopin = false;
    this.gameService.dealCards()
  }

  addPlayer() {
    if(this.pseudo !== ''){
      let token = this.playersToker.pop();
      if (typeof token !== 'undefined'){
        this.gameService.players.push(new Player(token, this.pseudo));
        if (this.gameService.players.length === 1){
          sessionStorage.setItem('idPlayer', token.toString())
        }
        this.pseudo = '';
        this.pseudoInputElement.nativeElement.focus();
      }
    }
  }
}
