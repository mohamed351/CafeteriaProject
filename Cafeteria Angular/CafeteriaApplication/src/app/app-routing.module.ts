import { ProductEditComponent } from './panel/product-admin/product-edit/product-edit.component';
import { ProductAddComponent } from './panel/product-admin/product-add/product-add.component';
import { ProductAdminComponent } from './panel/product-admin/product-admin.component';
import { CategoryAdminComponent } from './panel/category-admin/category-admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"categoryControl",component:CategoryAdminComponent},
  {path:"productControl",component:ProductAdminComponent},
  {path:"productControl/productControlAdd",component:ProductAddComponent},
  {path:"productControl/productControlEdit/:id",component:ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
