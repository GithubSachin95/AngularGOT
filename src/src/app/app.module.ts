import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule , Router } from '@angular/router';
import { HttpModule , Http} from '@angular/http';
//Routes imports
import { AppRoutes } from './app.routes' 

//component imports
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './about.component';
import { AppService } from './app.service';
import { CharacterComponent } from '../character/character.component';
import { BookComponent } from '../book/book.component'; 
import { HouseComponent } from '../house/house.component'
import { SplitLastPipe } from './id.pipe';
@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(AppRoutes) , HttpModule],
  declarations: [ AppComponent , HomeComponent , AboutComponent , CharacterComponent , SplitLastPipe , BookComponent ,          HouseComponent],
  bootstrap:    [ AppComponent ],
  providers : [AppService],
})
export class AppModule { }
