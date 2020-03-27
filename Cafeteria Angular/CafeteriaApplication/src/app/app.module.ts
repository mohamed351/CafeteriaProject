import { LocalStorageUsersService } from './../services/local-storage-users.service';
import { UserService } from './../services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductAdminComponent } from './panel/product-admin/product-admin.component';
import { CategoryAdminComponent } from './panel/category-admin/category-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { ToastrModule } from 'ngx-toastr';
import { ProductAddComponent } from './panel/product-admin/product-add/product-add.component';
import { ProductEditComponent } from './panel/product-admin/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavMenuComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
    HomeUserComponent,
    ProductAddComponent,
    ProductEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImageCropperModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, LocalStorageUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
