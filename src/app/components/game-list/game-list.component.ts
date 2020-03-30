import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { GameItem } from 'src/app/interface/game-item.interface';
import { Genere, genereListDB } from 'src/app/interface/genere';
import { GamesListService } from 'src/app/services/game-list.service';


@Component({
  selector: 'app-games-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GamesListComponent implements OnInit {
  gameList: GameItem[];
  genereList: Genere[] = genereListDB;
  genereSelezionato: number;
  constructor(private gamesListService: GamesListService) {
    this.gameList = this.gamesListService.gameList
  }
  ngOnInit(): void {
  }
  selectChange(value) {
    this.genereSelezionato = Number(value)
  }
}

