import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../model/product';
@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  Products:Product[];
 
  constructor(private product:ProductService) { 
    
  }

  ngOnInit(): void {
     this.product.GetProduct().subscribe(a=>{
      this.Products=a;
       console.log(this.Products);
     });
     

  }

}
