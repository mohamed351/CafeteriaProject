import { ShoppingCart } from './../model/shopping-cart';
import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() {
    if(localStorage.getItem("shoppingcart") == null){
      localStorage.setItem("shoppingcart",JSON.stringify([]));
    }
   }

   SetNewItem(ShoppingCart:ShoppingCart){
     
     let cart:ShoppingCart[] = JSON.parse(localStorage.getItem("shoppingcart"));
       if( cart.findIndex(a=>a.ProductID == ShoppingCart.ProductID)  == -1){
         cart.push(ShoppingCart);
       }
       else
       {
        let index = cart.findIndex(a=>a.ProductID == ShoppingCart.ProductID);
        console.log(index);
       
          cart[index].Qtu++;
       }
     localStorage.setItem("shoppingcart",JSON.stringify(cart));
   }

   GetItems():ShoppingCart[]{
    return JSON.parse(localStorage.getItem("shoppingcart"));
   }

   GetLenghtOfItems():number{
      return (<ShoppingCart[]>JSON.parse(localStorage.getItem("shoppingcart"))).length;
   }
  
  

}
