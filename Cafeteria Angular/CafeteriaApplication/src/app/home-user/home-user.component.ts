import { ShoppingCartService } from '../../services/shopping-cart.service';

import { Category } from './../../model/category';
import { ShoppingCart } from './../../model/shopping-cart';
import { Product } from './../../model/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  Product:Product[];
  ShoppingCart:ShoppingCart[];
  constructor(private ProductService:ProductService,private shop:ShoppingCartService) {

   }

  ngOnInit(): void {
    this.ProductService.GetProduct().subscribe(a=>{
       this.Product = a;
       
    });

    this.ShoppingCart = this.shop.GetItems();
  }
  GetProduct(prodcut:Product){
    
     let item = new ShoppingCart(prodcut.ID,prodcut.Name,1,prodcut.Price);
     console.log(item);
     this.shop.SetNewItem(item);
     console.log(this.shop.GetItems());
     this.ShoppingCart = this.shop.GetItems()
     
  }

}
