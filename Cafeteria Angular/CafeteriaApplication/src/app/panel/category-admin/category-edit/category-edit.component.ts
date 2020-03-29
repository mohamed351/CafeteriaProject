import { CategoryService } from './../../../../services/category.service';
import { Category } from 'src/model/category';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  Category:Category;
  constructor(private router:ActivatedRoute,
    private category:CategoryService,
    private routerNav:Router,
    private toster:ToastrService
    ) {
      this.Category = new Category(0,'');
   }

  ngOnInit(): void {
    this.router.paramMap.subscribe(a=>{
     let  id:number = +a.get("id");
       this.category.GetCategoryByID(id).subscribe(a=>{
         this.Category = a;
         console.log(this.Category)
       });
    });
  }

  SubmitData(data){
    if(data.valid){
    this.Category=data.value;
    this.category.PutCategory(this.Category).subscribe(a=>{
      this.routerNav.navigate(['/categoryControl']);
    this.toster.success("Edit Category Successfull","Success");

    });

    }
  
  }



}
