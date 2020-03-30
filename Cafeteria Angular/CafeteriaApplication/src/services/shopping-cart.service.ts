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
        ShoppingCart.FullPrice = ShoppingCart.Price *ShoppingCart.Qtu;
         cart.push(ShoppingCart);
       }
       else
       {
        let index = cart.findIndex(a=>a.ProductID == ShoppingCart.ProductID);
          cart[index].Qtu++;
    
          cart[index].FullPrice = ShoppingCart.Price * cart[index].Qtu;
       }
     localStorage.setItem("shoppingcart",JSON.stringify(cart));
   }

   GetItems():ShoppingCart[]{
    return JSON.parse(localStorage.getItem("shoppingcart"));
   }

   GetLenghtOfItems():number{
      return (<ShoppingCart[]>JSON.parse(localStorage.getItem("shoppingcart"))).length;
   }
   AddQtuitemOfProduct(ID:number){
    let cart:ShoppingCart[] = JSON.parse(localStorage.getItem("shoppingcart"));
    let index = cart.findIndex(a=>a.ProductID == ID);
    cart[index].Qtu++;
    cart[index].FullPrice =  cart[index].Price*  cart[index].Qtu;
    localStorage.setItem("shoppingcart",JSON.stringify(cart));
   }

   MinQtuitemOfProduct(ID:number){
   
    let cart:ShoppingCart[] = JSON.parse(localStorage.getItem("shoppingcart"));
    let index = cart.findIndex(a=>a.ProductID == ID);
    if(index == -1){
      return;
    }
    else{
     if(cart[index].Qtu >1){
    cart[index].Qtu--;
    cart[index].FullPrice =  cart[index].Price*  cart[index].Qtu;
    localStorage.setItem("shoppingcart",JSON.stringify(cart));
     }
    }
    
   }
   DeleteItemInProduct(ID:number){
     let cart:ShoppingCart[] = JSON.parse(localStorage.getItem("shoppingcart"));
      let index = cart.findIndex(a=>a.ProductID);
      if(index == -1){
        return;
      }
      else
      {
        cart.splice(index,1);
        localStorage.setItem("shoppingcart",JSON.stringify(cart));
      }

   }

   TotalPrice(){
    let price =0;
    let cart:ShoppingCart[] = JSON.parse(localStorage.getItem("shoppingcart"));
    cart.forEach(element => {
      price += element.FullPrice;
    });

    return price;
   }
   Clear():void{
    localStorage.setItem("shoppingcart",JSON.stringify([]));
   }


  
  

}
