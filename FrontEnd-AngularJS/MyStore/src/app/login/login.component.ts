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
  errorMessage: string | null = null;
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
// handleLogin() {
//   this.service.getToken(this.form.value).then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Handle successful response
//       this.errorMessage = null; // Clear any previous error messages
//       // Update UI with data
//     })
//     .catch(error => {
//       // Handle error
//       console.error('Error occurred:', error);
//       // Parse error response
//       error.text().then((errorBody: any) => {
//         if (errorBody && errorBody.non_field_errors && errorBody.non_field_errors.length > 0) {
//           const errorMessage = errorBody.non_field_errors[0];
//           if (errorMessage === 'Unable to log in with provided credentials.') {
//             this.errorMessage = 'Invalid credentials';
//           } else {
//             this.errorMessage = errorMessage;
//           }
//         } else {
//           this.errorMessage = 'An error occurred. Please try again later.';
//         }
//       }).catch(() => {
//         this.errorMessage = 'An error occurred. Please try again later.';
//       });
//     });
// }
// }

