import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }


  reviews=[
    {"id":1,"pid":1,"comment":"good","user":"anj","rating":4},
    {"id":2,"pid":2,"comment":"worth","user":"anj","rating":5},
    {"id":3, "pid":3,"comment":"best product","user":"anj","rating":4},
    {"id":4,"pid":3,"comment":"good","user":"anj","rating":5},
    {"id":5, "pid":4,"comment":"worth","user":"anj","rating":3},
    {"id":6,"pid":4,"comment":"mst buy","user":"anj","rating":5},
    {"id":7, "pid":5, "comment":"awsone","user":"anj","rating":4},
    {"id":8,"pid":5,"comment":"good","user":"anj","rating":4},
    {"id":9,"pid":6, "comment":"worth","user":"anj","rating":5},
    {"id":10,"pid":6,"comment":"best","user":"anj","rating":5},
    {"id":11,"pid":7,"comnent":"good one","user":"anj","rating":4},
    {"id":12,"pid":7,"comnent":"good","user":"anj","rating":4}]


  getAllProducts(){
    // return fetch(`https://fakestoreapi.com/products/`)
    let tkn =  localStorage.getItem('token')
    if (tkn){
    return fetch('http://127.0.0.1:8000/products/',{
      'method':'GET',
      'headers':{'Content-type': "application/json;charset=UTF-8",
      'Authorization': tkn
    }})}
    return new Promise((res, rej)=>rej('error'))
  }

  get getAuthToken(){
    return localStorage.getItem('token')
  }

  getProductDetail(id:any){
    let tkn = localStorage.getItem('token')
    if (tkn){
      return fetch(`http://127.0.0.1:8000/products/${id}/`,{
        'method':'GET',
        'headers':{'Content-type':'application/JSON;charset=UTF-8',
        'Authorization':tkn
        }
      })
    }
    else{
      return new Promise((res, rej)=>rej('failed to fetch'))
    }

    // return fetch(`https://fakestoreapi.com/products/${id}`)

  }

  getProductReview(id:any){
    // let tkn = this.getAuthToken
    let tkn = localStorage.getItem('token')
    if (tkn){
      return fetch(`http://127.0.0.1:8000/products/${id}/get_reviews/`,{
        "method":"GET",
        "headers":{
          "Content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
    })}
    else{
      return  new Promise((res, rej)=>rej('failed to fetch'))


    }
    // console.log(typeof this.reviews.filter(n=>n.pid==id));
    // return this.reviews.filter(n=>n.pid==id)

    
  }
  addProductReview(data:any, id:any){
    // data['pid']=id
    // this.reviews.push(data)
    // console.log(this.reviews);
    let tkn = localStorage.getItem('token')
    if(tkn){
      return fetch(`http://127.0.0.1:8000/reviews/${id}/add_review/`,{
        'method':'POST',
        'body':JSON.stringify(data),
        'headers': {
          'Content-type':'application/JSON;charset=UTF-8',
          'Authorization':tkn
        }
      })
    }
    else{
      return new Promise((res, rej)=>rej('error'))
    }
  }


  getToken(data:any){
    return fetch('http://127.0.0.1:8000/token/',{
      'method':'POST',
      'body':JSON.stringify(data),
      'headers': {
        'Content-type':'application/json;character=utf-8'
      }
    })
  }
}
