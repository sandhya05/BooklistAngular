
import {Component, Input, Output } from '@angular/core';
import {Itile} from '../interfaces/itile'; 


@Component({
  selector: '[app-mytile]',
  templateUrl: './mytile.component.html',
  styleUrls: ['./mytile.component.css']
})
export class MytileComponent  {
  imagePath:string="/assets/images/";
  @Input()mytile:Itile;
  @Output()ratingClicked;
  constructor() {   
  }

  updateRatingToDb(){
    console.log("data from the child compoent is ${message}" );
  }
  
}
