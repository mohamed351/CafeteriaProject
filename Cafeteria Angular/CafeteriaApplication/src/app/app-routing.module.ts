import { CategoryAddComponent } from './panel/category-admin/category-add/category-add.component';
import { CategoryEditComponent } from './panel/category-admin/category-edit/category-edit.component';
import { ProductEditComponent } from './panel/product-admin/product-edit/product-edit.component';
import { ProductAddComponent } from './panel/product-admin/product-add/product-add.component';
import { ProductAdminComponent } from './panel/product-admin/product-admin.component';
import { CategoryAdminComponent } from './panel/category-admin/category-admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"categoryControl",component:CategoryAdminComponent},
  {path:"CategoryAddComponent",component:CategoryAddComponent},
  {path:"categoryControlEdit/:id",component:CategoryEditComponent},
  {path:"productControl",component:ProductAdminComponent},
  {path:"productControl/productControlAdd",component:ProductAddComponent},
  {path:"productControl/productControlEdit/:id",component:ProductEditComponent},
  {path:"CustomerHome",component:HomeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
