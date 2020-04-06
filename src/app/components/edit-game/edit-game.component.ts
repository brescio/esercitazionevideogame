import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genere } from 'src/app/interface/genere';
import { GamesListService } from 'src/app/services/game-list.service';
import { GameItem } from 'src/app/interface/game-item.interface'; 
import { FormGroup, FormBuilder,FormArray,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  game: GameItem;
  gameForm: FormGroup

  constructor(private gamesListService: GamesListService,private formb: FormBuilder) {  
    this.gameForm = this.formb.group({
      id: '',
      name: '',
      genere:'',
    });
  }


  ngOnInit(): void {
  }
  form(id : number){
    this.game=this.gamesListService.getGameItem(id);

  }
}
