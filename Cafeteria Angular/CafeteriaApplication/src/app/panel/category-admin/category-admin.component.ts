import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DeleteModelBoxComponent } from './../../delete-model-box/delete-model-box.component';
import { Category } from './../../../model/category';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData{
  ID:any,
  Name:string
}
@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {

  Category:Category[];
  constructor(private CategoryService:CategoryService ,
    public dialog: MatDialog,
    private Toastr:ToastrService) { 

    }

  ngOnInit(): void {
    this.CategoryService.GetCategories().subscribe(a=>{
      console.log(a);
      this.Category = a;
    })
 
}

  OpenDailog(object:DialogData):void{
    console.log(object);
     let result =  this.dialog.open(DeleteModelBoxComponent,{
       data:object
     });
     result.afterClosed().subscribe(b=>{
      if(b.status){
        this.CategoryService.DeleteCategory(b.data.ID).subscribe(a=>{
           const index =  this.Category.findIndex(a=>a.ID == b.data.ID);
           this.Category.splice(index,1);
           this.Toastr.warning("The Category has been deleted with their Product","Warning");
        });
      }
      
     });

  }


}