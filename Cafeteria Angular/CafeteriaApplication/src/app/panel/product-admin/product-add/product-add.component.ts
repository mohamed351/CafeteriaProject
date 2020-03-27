import { Category } from './../../../../model/category';
import { CategoryService } from './../../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageWarningMessage:any ='';
  constructor(private CategoryService:CategoryService) {

   }
 Category:Category[];
  ngOnInit(): void {

   
  this.CategoryService.GetCategories().subscribe(a=>{
    this.Category =a;
   });
   
  }

  SubmitData(data){
    console.log(data);
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = event.base64;
  console.log(this.croppedImage);
  
}


}
