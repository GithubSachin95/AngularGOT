import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService{

private commonURL="https://anapioficeandfire.com/api/";

constructor(public http : Http){

}

getAllBooks(){
  let allBooks = this.http.get(this.commonURL+"books/")
  .map(response => response.json())

  return allBooks;
}

getAllCharacters(){
  let allCharacters = this.http.get(this.commonURL+"characters/")
  .map(response => response.json())

  return allCharacters;
}

getAllHouses(){
  let allHouses = this.http.get(this.commonURL+"houses/")
  .map(response => response.json())

  return allHouses;
}


getCharacter(id : number){
  let character = this.http.get(this.commonURL+"characters/"+id)
  .map(response => response.json())

  return character;
}

getBook(id:number){
  let book = this.http.get(this.commonURL+"books/"+id)
  .map(response => response.json())
  return book;
}

getHouse(id:number){
  let house = this.http.get(this.commonURL+"houses/"+id)
  .map(response =>response.json())
  return house;
}
}  