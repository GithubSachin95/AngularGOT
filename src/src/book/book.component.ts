import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AppService } from '../app/app.service';
import { Location } from '@angular/common';
@Component({
  selector : 'book',
  templateUrl : './book.component.html', 
})

export class BookComponent implements OnInit{
  charactersArray : any;
constructor( public route : ActivatedRoute , public service : AppService , public location : Location){



}

ngOnInit(){
let bookID = this.route.snapshot.paramMap.get('url');
this.getBook(bookID)
}

book : any;
getBook(bookID: any){
    let book = this.service.getBook(bookID).subscribe(


      data=>{
        this.book = data;
        this.getCharacters();
      },
      error =>{
        console.log("Error occured")
      }
    )
}

goBack(){
  this.location.back();
}
getCharacters(){
  let bookCharacters = new Array();
  let charactersArray = new Array();
  for( let character of this.book["characters"]){
    
    let splits = character.split('/');
    if(splits.length > 1) {
      
    let characterID = splits.pop();
    this.service.getCharacter(characterID).subscribe(

      data=>{
          charactersArray.push(data);
      },
      error=>{
        console.log("Error occured");
      }
    )

    
    } 
  }
  this.charactersArray = charactersArray;
}
}