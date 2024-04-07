import { Component, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent {
  @Input() proid:any;
  constructor(private service:StoreService){
    
  }

  form = new FormGroup(
    {
      "description": new FormControl('', Validators.required),
      "rating": new FormControl('', Validators.required),
      // "description": new FormControl('', Validators.required),
    }
  )
  addReviewForm(){
    // console.log(this.form);
    this.service.addProductReview(this.form.value, this.proid).then((res:any)=>res.json()).then((data:any)=>console.log(data))
    
  }
}
