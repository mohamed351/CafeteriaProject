import { LocalStorageUsersService } from './local-storage-users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient,private LocalStorageUsersService:LocalStorageUsersService) { }

  GetCategories(){
   let  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':`Bearer ${ this.LocalStorageUsersService.GetTheAccessToken() }`
    });
    return this.http.get<Category[]>("http://localhost:62263/api/categories",{headers:header});
  }

}
