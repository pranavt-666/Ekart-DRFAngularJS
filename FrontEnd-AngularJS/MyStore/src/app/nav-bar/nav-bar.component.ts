import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  categories:any;
  constructor(private service: StoreService){}
  ngOnInit(): void {
    this.service.getCategories().then((res:any)=>res.json()).then(data=>this.categories=data)
    
  }


}
