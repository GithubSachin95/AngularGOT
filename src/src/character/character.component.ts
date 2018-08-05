import { Component , OnInit} from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AppService }  from '../app/app.service';
import { Location } from '@angular/common';
@Component({
  selector : 'character',
  templateUrl : './character.component.html',
  styleUrls : ['./character.component.css'],
})

export class CharacterComponent implements OnInit{
  character : any;
  referenceBooksData : any;
  referenceBooks : any[];
  constructor( public activatedRoute : ActivatedRoute , public router : Router , public service : AppService , public location : Location){

  }

ngOnInit(){
    let id = this.activatedRoute.snapshot.paramMap.get('url');
    this.getCharacter(id);
    

}

getCharacter(id : any){
   let character = this.service.getCharacter(id).subscribe(

     data=>{
       this.character = data;
       this.getReferenceBooks();
     },
     error =>{
       console.log("Error occured");
     }
   )
}
goBack(){
  this.location.back();
}

getReferenceBooks(){
  let referenceBookURLS = this.character["books"];
  let refBooks = new Array();
  for(let book of referenceBookURLS){
      var bookID = book[book.length -1];
      this.service.getBook(bookID).subscribe(

        data=>{
          this.referenceBooksData = data;
          refBooks.push(this.referenceBooksData.name)
        },
        error=>{
          console.log("Error Occured");
        }
      )
  }
  this.referenceBooks = refBooks;
}

}