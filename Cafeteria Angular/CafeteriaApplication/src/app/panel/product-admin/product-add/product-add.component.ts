import { ProductService } from './../../../../services/product.service';
import { Product } from './../../../../model/product';
import { Category } from './../../../../model/category';
import { CategoryService } from './../../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageWarningMessage:any ='';
  constructor(private CategoryService:CategoryService
    , private ProductService:ProductService,
    private tost:ToastrService,
    private router:Router) {
   

   }
 Category:Category[];
  FormData;
  ngOnInit(): void {

  this.CategoryService.GetCategories().subscribe(a=>{
    this.Category =a;
   });
   
  }

  SubmitData(data){
    if(data.valid && this.croppedImage != ''){
       let object =data.value
      let product:Product = new Product(-1,object.ProductName,
        this.croppedImage
        ,false
        ,true,object.price
        ,object.qtu
        ,object.categoryID);


       this.ProductService.PostProduct(product).subscribe(a=>{
        this.router.navigate(['/productControl']);
          this.tost.success("Product has been Added" ,"Success");
          

       });




    }

  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
  this.croppedImage = event.base64;
 
  
}

CheackIsValidOrNot(data){
  
  return data.valid  && this.croppedImage != '' ;
}


}
