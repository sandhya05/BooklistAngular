import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterEvent} from '@angular/router';
import {TileService} from '../service/tile.service';
import {Itile} from '../interfaces/itile';
// import {RouterModule,Routes} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {
 
//    imageUrl:string = "assets/images/";
//    tile:ITile;

//   constructor(private activateRoute:ActivatedRoute) { }
//    ngOnInit() {
//    let id = +this.activateRoute.snapshot.paramMap.get('id');
//    console.log(id);
//  }

 imageUrl:string = "assets/images/";
 tile:Itile;
 
 errorMessage: any;
 constructor(private tileService:TileService,private activateRoute:ActivatedRoute,private routerService:Router) { }
 ngOnInit() {
   let id = +this.activateRoute.snapshot.paramMap.get('id');
   
  //  this.tileService.getTile(id).subscribe(tile => {
  //      this.tile = tile;
  //  },
  // error => this.errorMessage = <any>error);
  // this.tile = this.tile;
}   

navigateBack(){
  this.routerService.navigate(['/tiles']);
}

}
