import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GamesListComponent } from './components/game-list/game-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RatingComponent } from './components/rating/rating.component';
import { from } from 'rxjs';
import { EditUserComponent } from './components/edit-user/edit-user.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gamesList', component: GamesListComponent },
  { path: 'gameDetail', component: GameDetailComponent },
  { path: 'editGame', component: EditGameComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesListComponent,
    MenuComponent,
    EditGameComponent,
    GameDetailComponent,
    LoginComponent,
    RatingComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
