import { Routes  } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './about.component';
import { CharacterComponent } from '../character/character.component';
import { BookComponent } from '../book/book.component';
import { HouseComponent } from '../house/house.component';
export const AppRoutes : Routes  =[
  { path : 'home' , component : HomeComponent},
  { path : 'about' , component : AboutComponent },
  { path : 'character/:url' , component : CharacterComponent},
  { path : 'book/:url' , component : BookComponent},
  { path : 'house/:url' , component : HouseComponent},
  { path :'***' , component : HomeComponent , pathMatch : 'full'},
  { path :'' , component : HomeComponent },
  
]