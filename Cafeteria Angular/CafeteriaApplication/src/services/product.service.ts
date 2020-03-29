import { Product } from './../model/product';
import { LocalStorageUsersService } from './local-storage-users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
    header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${ this.LocalStorageUsersService.GetTheAccessToken() }`
    });
  constructor(private http:HttpClient, private LocalStorageUsersService:LocalStorageUsersService) { }
  GetProduct(){

  
    return this.http.get<Product[]>("http://localhost:62263/api/Products",{headers:this.header});
  }
  GetByID(ID:number){
    return this.http.get<Product[]>("http://localhost:62263/api/Products/"+ID,{headers:this.header})
  }

  PostProduct(product:Product){
    return this.http.post<Product>("http://localhost:62263/api/Products",product,{headers:this.header});
  }

  PutProduct(ID:number, product:Product){
    return this.http.put("http://localhost:62263/api/Products/"+ID,product,{headers:this.header});

  }
  DeleteProduct(ID:number){
    return this.http.delete("http://localhost:62263/api/Products/"+ID,{headers:this.header});
  }
  
}
