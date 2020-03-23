import { Injectable } from '@angular/core';
import { GameItem } from 'src/app/models/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  private gamelist: GameItem[]=[
    {
      id:1, nome :"bioshok", genere :"sparatutto",releasedate :new Date(2007,4) 
    
    }
    {
      id:1,nome: 'fifa20',descrizione: 'gioco di calcio',	genere: 'sport',rating: 'aaa',prezzo: 200,anno_uscita: new Date()

    },
    {
      id:2,nome: 'GranTurismo',descrizione: 'corsa',	genere: 'sport',rating: '5',prezzo: 120,anno_uscita: new Date()

    },{
      id:3,nome: 'Sonic Generations',descrizione: 'animazione',	genere: 'animazione',rating: 'sonic',prezzo: 50,anno_uscita: new Date()

    }
  ]

  constructor() { 

  }
  get gamelista(){ //  get di ritorno la lista dei viedogiochi 
    return this.gamelista;
  }



}
