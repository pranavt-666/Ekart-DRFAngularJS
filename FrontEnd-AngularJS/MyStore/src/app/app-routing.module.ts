import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import {Router} from '@angular/router'
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:'products', component:ProductListComponent},
  {path:'products/:id', component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
