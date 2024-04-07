import { Component, OnInit} from '@angular/core';
import { StoreService } from '../services/store.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products:any;
  constructor(private service:StoreService, private router:Router){
  }

  ngOnInit(): void {  
    // console.log('hereeeee');
    // this.service.getAllProducts().then(res=>res.json()).then(data=>this.products=data)
    this.service.getAllProducts().then((res:any)=>res.json()).then((data:any)=>console.log(data))
    this.service.getAllProducts().then((res:any)=>res.json()).then((data:any)=>this.products=data)

}
  redirectToProductDetail(id:any){
    this.router.navigate(['products/', id])
  }

}
