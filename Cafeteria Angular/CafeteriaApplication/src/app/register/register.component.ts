import { User } from './../../model/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageWarningMessage:any ='';

  constructor(private UserService:UserService, private toster:ToastrService) { }
  OnDataSumbit(data:NgForm){
 
   try
   {
  if(this.croppedImage != '' && data.valid){
         
      let user =new User(data.value.Email,data.value.Password,data.value.Name,data.value.Phone,data.value.UserName,data.value.Password,this.croppedImage )
      this.UserService.RegisterUserPost(user).subscribe(a=>{
        this.toster.success("SuccessFull Registration Please Login","Info");
        
      });
    }
    else
    {
      this.toster.error("Form isn't valid","Error");
    }
  }
  catch{
    this.toster.error("Error has been occured","Error");
  }

  }

fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    
}

  ngOnInit(): void {
  }

}
