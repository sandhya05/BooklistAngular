import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating:number;
  @Output() ratingClicked:EventEmitter<string>= new EventEmitter();
  // @Output() ratingClicked;
  ratingWidth:number=65;

  constructor() { 
   
  }

 ngOnInit() {
 }
 ngOnChanges(){
  this.ratingWidth  = this.rating * 65/5;
 }

s

ratingUpdated(ratingValue){
  console.log("rating has been updated",ratingValue);
  this.ratingClicked.emit("the rating has been updated from 2 to 3");
}


}
