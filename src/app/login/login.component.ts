import { Component, OnInit } from '@angular/core';
import   {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string="";
  passWord: string;
  Zipcode: string;
    
  login(){
    if(this.userName == null || this.userName == ""){
      console.log("user is name is required");
    }
    // else if(!this.userName.includes(this.userName)){
    //console.log(`user ${this.userName} is not a registered user`);
    // }
    else{
      this.routerService.navigate(['/welcome']);
    }
  }
  constructor(private routerService:Router) { }
}
