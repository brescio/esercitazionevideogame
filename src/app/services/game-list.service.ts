import { Injectable } from '@angular/core';
import { GameItem } from '../interface/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesListService {

 // private gameListStored: GameItem[] = [
 //   { id: 1, description: "gioco bello", name: "Bioshock", genere: "Sparatutto", releaseDate: new Date(2007, 4)}
  //];

  constructor() { }

  gameList: GameItem[]=[

    {
      id: 1, name: 'Jump Force', genereId: 1
    },
    {
      id: 2, name: 'Dragon Ball Z: Kakarot', genereId: 1
    },
    {

      id: 3, name: 'Fifa', genereId: 2

  },
  {

    id: 4, name: 'Sword Art Online: Hollow Realizzation', genereId: 1

},
{

  id: 5, name: 'Dragon Ball XENOVERSE2', genereId: 1

},
{

  id: 6, name: 'Tokyo Ghoul: Re Call to EXIST', genereId: 1

}
  ];

}