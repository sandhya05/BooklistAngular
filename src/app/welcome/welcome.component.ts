import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  pageTitle:string="Welcome !  , we appreciate your time in shopping using TileKart "

  Description:string="TileKart is an online application for ordering and buying tiles for house."
  constructor() { }
  
  ngOnInit() {
  }

}
