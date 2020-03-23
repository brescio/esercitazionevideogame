import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { HomeComponent } from './components/home/home.component';
import { MenuserviceComponent } from './services/menuservice/menuservice.component';
import { GameItem } from './models/game-item.interface/game-item.interface.component';
import { GameItem } from './models/game-item.interface.ts/game-item.interface.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    MenuComponent,
    EditGameComponent,
    GameDetailComponent,
    HomeComponent,
    MenuserviceComponent,
    GameItem.InterfaceComponent,
    GameItem.Interface.TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }