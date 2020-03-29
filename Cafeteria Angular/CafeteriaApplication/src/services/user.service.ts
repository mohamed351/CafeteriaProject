import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../model/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }
   RegisterUserPost(User:User){
    let header = new HttpHeaders({
      'Content-Type':  'application/json',
      

    });
    return  this.http.post("http://localhost:62263/api/Account/Register",User,{headers:header});

   }
   LoginUser(userLoginInformation:{username:string,password:string}){
    
    var header = new HttpHeaders({
     "Content-Type":"application/x-www-form-urlencoded",
     "Accept":"application/x-www-form-urlencoded"
    });
    var data = "grant_type=password&username=" + userLoginInformation.username + "&password=" + userLoginInformation.password;

     return this.http.post("http://localhost:62263/token",data,{headers:header});
   }

   
}
