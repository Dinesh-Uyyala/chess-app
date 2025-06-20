import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { PieceComponent } from './components/piece/piece.component';
import { LoginComponent } from './login/login.component';
import { DasboardComponent } from './dasboard/dasboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PieceComponent,
    LoginComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }