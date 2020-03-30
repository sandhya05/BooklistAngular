import { Component, Input  } from '@angular/core';
import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Itile} from '../interfaces/itile';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  // selectedFilter: string = "name";
  // filterText:string="";
  // filterOptions: Array<string> = ["name", "model", "price"];
  // imagePath:string="/assets/images/";
  // private tileURL:string = 'http://demo5911200.mockable.io/tiles'; 

  tiles:Array<Itile>=[
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
      model:"nit-02",
      price :101,
      rating:4,
      image:"tile1.jpg",
      status:1
    },
    {
      name:"Magificient4",
      model:"nit-02",
      price :101,
      rating:4,
      image:"tile2.jpg",
      status:1
    },
    {
      name:"Magificient5",
      model:"nit-02",
      price :101,
      rating:4,
      image:"tile1.jpg",
      status:1
    }];
 
    constructor(private _httpClient : HttpClient, private activateRoute:ActivatedRoute) {
    }

    getTileData(){
      return this.tiles;
    }
    
  //   getTileData():Observable<Itile[]>{
  //     return this._httpClient.get<Itile[]>(this.tileURL);
  //   }
    
  //   getTile(id:number): Observable<Itile> {
  //     return this._httpClient.get<Itile>(this.tileURL+`\\${id}`)
  //  }
   
}
