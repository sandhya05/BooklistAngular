import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  registerForm:FormGroup;
  billingAddress:FormGroup;

  constructor(private fb:FormBuilder,private routerService:Router) {
    this.registerForm = this.fb.group({
      userName: ['',Validators.required],  
       email: [''],
       phoneNumber: [''],
       billingAddress: this.fb.group({
         doorNumber: [''],
         city: [''],
         zip: ['',Validators.required]
       }),
     });
    }
    ngOnInit() {
    }
      
    register(){
      // console.log(this.registerForm.value);
      this.routerService.navigate(['/thankyou']);
    }
  }
  

