import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';
import { GameListService } from 'src/app/services/game-list.service';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @Output("ShowDetail")
ShowDetailEvent:EventEmitter<number>=new EventEmitter();
  gameList: GameItem[] = [];
  constructor(private gameListService: GameListService) {
    this.gameList = this.gameListService.getGameList();
  }

  ngOnInit(): void {
  }
  ShowDetail(id:number){
    this.ShowDetailEvent.emit(id);
  }

}
