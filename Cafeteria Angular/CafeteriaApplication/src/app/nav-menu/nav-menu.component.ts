import { LocalStorageUsersService } from './../../services/local-storage-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private LocalStorageUsers:LocalStorageUsersService) { }

  ngOnInit(): void {
  }
  
  IsUserLogin()
  {
    return this.LocalStorageUsers.CheckLoginOrNot();
  }
  GetImage(){
    return this.LocalStorageUsers.GetImage();
  }
  GetName(){
    return this.LocalStorageUsers.GetName();
  }
  LogOut(){
   
     this.LocalStorageUsers.LogOut();
  }
  GetUserRole(){
   return  this.LocalStorageUsers.GetRole();
  }
 



}
