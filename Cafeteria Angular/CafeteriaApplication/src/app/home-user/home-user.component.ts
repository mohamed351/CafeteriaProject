import { OrderDetailsService } from './../../services/order-details.service';
import { OrderDetails } from './../../model/order-details';
import { ShoppingCartService } from '../../services/shopping-cart.service';

import { Category } from './../../model/category';

import { ShoppingCart } from './../../model/shopping-cart';
import { Product } from './../../model/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  Product:Product[];
  ShoppingCart:ShoppingCart[];
  Note:string;
  constructor(private ProductService:ProductService,
    private shop:ShoppingCartService,
     private orderdetails:OrderDetailsService,
     private toster:ToastrService) {

   }

  ngOnInit(): void {
    this.ProductService.GetProduct().subscribe(a=>{
       this.Product = a;
       
    });

    this.ShoppingCart = this.shop.GetItems();
  }
  GetProduct(prodcut:Product){
    
     let item = new ShoppingCart(prodcut.ID,prodcut.Name,1,prodcut.Price,prodcut.ImageUrl);
     this.shop.SetNewItem(item);
     this.ShoppingCart = this.shop.GetItems()
     
  }
  MinQtu(ID:number){
  
    this.shop.MinQtuitemOfProduct(ID);
    this.ShoppingCart = this.shop.GetItems();
  
  }
  raiseQtu(ID:number){
  
    this.shop.AddQtuitemOfProduct(ID);
    this.ShoppingCart = this.shop.GetItems();
  }
  DeleteItem(ID:number){
    this.shop.DeleteItemInProduct(ID);
    this.ShoppingCart = this.shop.GetItems();
  } 
  GetFullPrice(){
    
    return this.shop.TotalPrice();
  }


  submitOrder(){
    let ord = new OrderDetails();
    ord.Note = this.Note;
    ord.OrderDetails = this.shop.GetItems();
    this.orderdetails.SubmitOrder(ord).subscribe(a=>{
      this.toster.success("You Made an Order","Please Wait till it finish");
    });
    this.shop.Clear();
    this.ShoppingCart= this.shop.GetItems();
   

  }


}
