import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { LocalStorageUsersService } from './local-storage-users.service';
import { OrderDetails } from './../model/order-details';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {


  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${ this.LocalStorageUsersService.GetTheAccessToken() }`
    });
  constructor(private http:HttpClient, 
    private LocalStorageUsersService:LocalStorageUsersService) { 

  }

  SubmitOrder(order:OrderDetails){
   return  this.http.post("http://localhost:62263/api/OrderDetails",order,{headers:this.header});
  }
}
