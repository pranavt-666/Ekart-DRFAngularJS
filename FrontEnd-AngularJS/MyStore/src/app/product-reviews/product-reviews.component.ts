import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.css'
})
export class ProductReviewsComponent implements OnInit {
  reviews:any;
  @Input() pid=""
  constructor(private service:StoreService){

  }
  ngOnInit(): void {
    console.log(this.service.getProductReview(this.pid));
    // console.log(this.pid);
    this.service.getProductReview(this.pid).then((res:any)=>res.json()).then((data:any)=>console.log(this.reviews = data))
    console.log(this.reviews);
    
    
  }

}
