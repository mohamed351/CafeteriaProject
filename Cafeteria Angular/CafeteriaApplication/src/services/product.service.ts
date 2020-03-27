import { LocalStorageUsersService } from './local-storage-users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private http:HttpClient, private LocalStorageUsersService:LocalStorageUsersService) { }
  GetProduct(){

    let  header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${ this.LocalStorageUsersService.GetTheAccessToken() }`
      });
    return this.http.get<Product[]>("http://localhost:62263/api/Products",{headers:header});
  }
}
