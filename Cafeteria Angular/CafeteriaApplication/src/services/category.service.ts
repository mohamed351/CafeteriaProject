import { Category } from './../model/category';

import { LocalStorageUsersService } from './local-storage-users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient,private LocalStorageUsersService:LocalStorageUsersService) { }
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${ this.LocalStorageUsersService.GetTheAccessToken() }`
    });
  GetCategories(){
    return this.http.get<Category[]>("http://localhost:62263/api/categories",{headers:this.header});
  }
  GetCategoryByID(ID:number){
    return this.http.get<Category>("http://localhost:62263/api/categories/"+ID,{headers:this.header})
  }
  PostCategory(Category:Category){
    return this.http.post<Category>("http://localhost:62263/api/categories",Category,{headers:this.header});
  }
  PutCategory(Category:Category){
    return this.http.put<Category>("http://localhost:62263/api/categories/"+Category.ID,Category,{headers:this.header});
  }
  DeleteCategory(ID:number){
    return this.http.delete("http://localhost:62263/api/categories/"+ID,{headers:this.header});
  }

  
  







}
