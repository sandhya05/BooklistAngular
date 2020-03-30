
import {Component, Input, OnInit } from '@angular/core';
import {TileService} from '../service/tile.service';
import {Itile} from '../interfaces/itile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit{

  selectedFilter: string = "Name";
  filterText:string="";
  filterOptions: Array<string> = ["Name", "Model", "Price","Status","Rating"];
  imagePath:string="/assets/images/";
  tiles:Array<Itile>;
  today:number=Date.now();

  filteredTiles:Array<Itile>=[
    {
      name:"Magificient1",
      model:"nit-01",
      price :100,
      rating:4,
      image:"tile1.jpg",
      status:0
    },
    {
      name:"Magificient2",
      model:"nit-02",
      price :101,
      rating:4,
      image:"tile2.jpg",
      status:1
    },
    {
      name:"Magificient3",
      model:"nit-03",
      price :101,
      rating:4,
      image:"tile2.jpg",
      status:1
    },
    {
      name:"Magificient4",
      model:"nit-04",
      price :101,
      rating:4,
      image:"tile2.jpg",
      status:1
    },
    {
      name:"Magificient5",
      model:"nit-05",
      price :101,
      rating:4,
      image:"tile2.jpg",
      status:1
    }];

    getFilteredTiles(filterText, filterdCriteria, tileArray) {
      var temptiles = tileArray.filter(function (tile) {
        var isMatch = false;
        switch (filterdCriteria) {
          case "name":
            if (tile.name.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase()) >= 0) {
              isMatch = true;
              return isMatch;
            }
            break;
          case "model":
            if (tile.model.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase()) >= 0) {
              isMatch = true;
              return isMatch;
            }
            break;
          case "status":
            if (tile.model.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase()) >= 0) {
              isMatch = true;
              return isMatch;
            }
            break;
          default:
            if (tile.name.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase()) >= 0) {
              isMatch = true;
              return isMatch;
            }
        }
      });
      return temptiles;
   }
   filter(){
    console.log(this.filterText);
    console.log(this.selectedFilter);
    this.filteredTiles = this.getFilteredTiles(this.filterText, this.selectedFilter,this.filteredTiles);
    console.log(this.filteredTiles);
  }
  
  constructor(private tileService:TileService) {
  }
   
  ngOnInit() {
  this.tiles = this.tileService.getTileData();
  this.filteredTiles = this.tiles;

    // this.tileService.getTileData().subscribe((tileData)=>{
    //   this.tiles = tileData;
    //   this.filteredTiles = this.tiles;
    // })
  }   

}

