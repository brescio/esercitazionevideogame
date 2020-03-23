import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { MenuItem } from './models/menu-item.interface/menu-item.interface.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EditGameComponent,
    GameDetailComponent,
    GameListComponent,
    MenuItem.InterfaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
