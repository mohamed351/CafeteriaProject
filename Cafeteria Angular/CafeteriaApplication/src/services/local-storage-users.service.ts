import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageUsersService {

  constructor() { 

  }

  SetLocalStorage(data:Object){
    localStorage.setItem("UserInformation",JSON.stringify(data));
  }

  GetRole(){
    if(localStorage.getItem('UserInformation') !=null){
      let user = JSON.parse( localStorage.getItem('UserInformation'));
      return user.roles;

    }
  }

  GetTheAccessToken(){
    if(localStorage.getItem('UserInformation') !=null){
      let user = JSON.parse( localStorage.getItem('UserInformation'));
      return user.access_token;

    }
  }

  
  GetUserName(){
    if(localStorage.getItem('UserInformation') !=null){
      let user = JSON.parse( localStorage.getItem('UserInformation'));
    
      return user.userName;
    }
  }
  GetName(){
    if(localStorage.getItem('UserInformation') !=null){
      let user = JSON.parse( localStorage.getItem('UserInformation'));
    
      return user.Name;
    }
  }

  GetImage(){
    if(localStorage.getItem('UserInformation') !=null){
      let user = JSON.parse( localStorage.getItem('UserInformation'));
    
      return user.image;
    }
  }

  CheckLoginOrNot():boolean{
    
    var checkStorage = localStorage.getItem('UserInformation');
    if(checkStorage == null)
      return false;
    else
      return true;
  }
  LogOut(){
    localStorage.removeItem("UserInformation");
  }



}
