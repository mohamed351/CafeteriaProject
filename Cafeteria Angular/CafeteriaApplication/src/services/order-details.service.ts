import { IOrderWithProduct } from './../model/order-product';
import { Interval } from './../model/interval';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { LocalStorageUsersService } from './local-storage-users.service';
import { OrderDetails } from './../model/order-details';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest } from '@angular/common/http';
import { Order } from 'src/model/order';


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
  GetInterval(Interval:Interval){

    let header2 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':`Bearer ${ this.LocalStorageUsersService.GetTheAccessToken() }`
      });
   
    let from = this.ConvertDate(Interval.from);
    let to = this.ConvertDate(Interval.to);
    

    return this.http.get<Order[]>("http://localhost:62263/api/myDetails/"+from+"/"+to,{headers:header2});
   
  }
  GetOrderProduct(ID:number){
    return this.http.get<IOrderWithProduct[]>("http://localhost:62263/api/OrderDetails/"+ID,{headers:this.header});
  }


  ConvertDate(Date:Date):string{
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(Date);
    const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(Date);
   const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(Date);
     return `${ye}-${mo}-${da}`;
  }
  


}
