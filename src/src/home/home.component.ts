import { Component , OnInit } from '@angular/core';
import { AppService } from '../app/app.service';
import { Http } from '@angular/http';
import { SplitLastPipe } from '../app/id.pipe';
@Component({
  selector : 'home',
  templateUrl : './home.component.html',
  styleUrls : ['./home.component.css'],
  providers : [AppService],
})

export class HomeComponent implements OnInit{
  constructor(public service : AppService){
  }
  books : any;
  characters : any;
  houses : any;
  public books1 = new Array();
  public character1 = new Array();
  public house1 = new Array();
  
  ngOnInit(){
    let books = this.service.getAllBooks().subscribe(

        data =>{
          this.books = data;
          this.bookSort();


        },
        error=>{
          console.log("Error occured")
        }

    )

    let characters = this.service.getAllCharacters().subscribe(

      data=>{
        this.characters = data;
        this.characterSort();
        
      },
      error=>{
        console.log("Error Occured")
      }
    )

    let houses = this.service.getAllHouses().subscribe(

      data=>{
        this.houses = data;
        this.houseSort();
        
      },
      error =>{
        console.log("Error occured");
      }

    )
    
    
  }
  bookSort(){
    let bookArray = new Array();
    let sortedArrayNames = new Array();
    
    for(let book of this.books){

      bookArray.push(book["name"]);
      }
      sortedArrayNames = bookArray.sort();

      for(let element of sortedArrayNames){
        for(let book of this.books){
            if(element == book["name"]){
                this.books1.push(book);

            }
        }

      }
      }

  characterSort(){
    let characterArray = new Array();
    let sortedArrayNames = new Array();
    for(let character of this.characters){
      characterArray.push(character["aliases"][0]);
    }
    sortedArrayNames = characterArray.sort();
    for(let element of sortedArrayNames){
      for(let character of this.characters){
        if(element == character["aliases"][0]){
          this.character1.push(character);
        }
      }
    }
  }

  houseSort(){
    let houseArray = new Array();
    let sortedHouseNames = new Array();
    for(let house of this.houses){
      houseArray.push(house["name"]);
    }
    sortedHouseNames = houseArray.sort();
    for(let element of sortedHouseNames){
      for(let house of this.houses ){
        if(element  == house["name"]){
          this.house1.push(house);
        }
      }
    }
  }
}


