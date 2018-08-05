import { Component , OnInit } from '@angular/core'; 
import { ActivatedRoute , Router } from '@angular/router';
import { AppService } from '../app/app.service' ;
import { Location } from '@angular/common'; 
@Component({
  selector : 'house',
  templateUrl : './house.component.html',
  styleUrls : ['./house.component.css']
})

export class HouseComponent implements OnInit{

houseID : any;
house : any;
currentLord : any;
overLord: any;
swornMember:any;
constructor(public activatedRouter : ActivatedRoute , public router :Router , public service : AppService , public location : Location){

}

ngOnInit(){
  let houseID =this.activatedRouter.snapshot.paramMap.get('url');
  this.getHouse(houseID);
  }

getHouse(id:any){
  
  this.service.getHouse(id).subscribe(

    data=>{
      this.house = data;
      this.getCharacter(this.house.currentLord,this.house.overLord,this.house.swornMembers)

    },
    error=>{
      console.log("Error occured");
    }
  )

  

  
}
getCharacter(currentLordUrl : any , overlordUrl : any , swornMembers : any ){
  //get currentLord
  if(currentLordUrl != "" && currentLordUrl != undefined){
  let splits = currentLordUrl.split('/');
  if(splits.length > 1) {
      
    let characterID = splits.pop();
    this.service.getCharacter(characterID).subscribe(

      data=>{
        let currentLordData = data;
       this.currentLord = currentLordData.name;
       
      },
      error=>{
      console.log("Error occured");
      }
    )
} 
  }
  else {
    this.currentLord = "Not Available";
  }

  //get overLord
  if(overlordUrl !="" && overlordUrl !=undefined){
    let splits = overlordUrl.split('/');
  if(splits.length > 1) {
      
    let characterID = splits.pop();
    this.service.getCharacter(characterID).subscribe(

      data=>{
        let overlordData = data;
       this.overLord = overlordData.name;
      },
      error=>{
      console.log("Error occured");
      })

   
   }
   } 
   else {
    this.overLord = "Not Available";
  }
  //get Sworn Members
  let swornMember = new Array();
  if(swornMembers != "" && swornMembers !="undefined"){
    for(let member of swornMembers){
       let splits = member.split('/');
       
       if(splits.length > 1) {
      
    let characterID = splits.pop();
      console.log(characterID);
      this.service.getCharacter(characterID).subscribe(
        data=>{
          let characters = data;
          swornMember.push(characters["name"]);
        },
        error =>{
          console.log("Error Occured");
        }
      )
    }
  }
  this.swornMember = swornMember;
 
  
}
}
goBack(){
  this.location.back();
}
}