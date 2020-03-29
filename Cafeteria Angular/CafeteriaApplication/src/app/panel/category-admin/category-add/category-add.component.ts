import { Router } from '@angular/router';
import { Category } from './../../../../model/category';
import { CategoryService } from './../../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  Category:Category;
  constructor(private CategoryService:CategoryService,
    private router:Router,
    private toster:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    if(data.valid){
      this.Category = data.value;
      this.Category.ID =-1;
      this.CategoryService.PostCategory(this.Category).subscribe(a=>{
        this.router.navigate(['/categoryControl']);
        this.toster.success("You Added a new Category","success");

      });
    }
  }
 

}
