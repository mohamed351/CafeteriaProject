import { LocalStorageUsersService } from './../../services/local-storage-users.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService:UserService ,private LocalStorageUsers:LocalStorageUsersService) { }

  ngOnInit(): void {
  }

  DataSubmit(data:NgForm){
    if(data.valid){
    this.UserService.LoginUser(
      {username:data.value.UserName
      , password:data.value.Password
        }).subscribe(a=>{
          this.LocalStorageUsers.SetLocalStorage(a);
           
    });
  }
 }


 CheckLoginOrNot():boolean{
    
  return this.LocalStorageUsers.CheckLoginOrNot();
}

  GetUserName(){
   return this.LocalStorageUsers.GetUserName();
  }

}
