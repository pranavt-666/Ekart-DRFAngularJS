import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  productDetail:any;
  constructor(private router:ActivatedRoute, private service:StoreService){


  }
  ngOnInit(): void {
    let id = this.router.snapshot.params['id']
    this.service.getProductDetail(id).then((res:any)=>res.json()).then((data:any)=>this.productDetail=data);  
    // console.log(this.productDetail);

    // this.router.params.subscribe(p=>console.log(p['id'])) another way of doing the above
  }


}
