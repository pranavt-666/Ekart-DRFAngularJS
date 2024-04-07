import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = new FormGroup(
    {
    "username": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required])

  }
  )
  constructor(private router:Router, private service:StoreService){

  }
  get username(){
    return this.form.get("username")
  }
  get password(){
    return this.form.get("password")
    
  }

  handleLogin(){
    // console.log(this.form.value);
    this.service.getToken(this.form.value).then(res=>res.json()).then(data=>{
      let tkn = data.token
      console.log(tkn);
      if (tkn){
        localStorage.setItem('token', 'Token '+tkn)
        this.router.navigateByUrl("products")
      }
    })

  }
}
