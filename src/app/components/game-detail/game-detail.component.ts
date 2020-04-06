import { Component, OnInit, Input } from '@angular/core';
import { GameItem } from 'src/app/interface/game-item.interface';
import { GamesListService } from 'src/app/services/game-list.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  
gameId:number;
game: GameItem;
constructor(private gamesListService: GamesListService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      console.log(params)
      this.game = this.gamesListService.getGameItem(Number(params.get('id')));   
    });


  
  }

}
