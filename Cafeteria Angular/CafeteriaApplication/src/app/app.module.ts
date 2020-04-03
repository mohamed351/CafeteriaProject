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
import { CategoryAddComponent } from './panel/category-admin/category-add/category-add.component';
import { CategoryEditComponent } from './panel/category-admin/category-edit/category-edit.component';
import { DeleteModelBoxComponent } from './delete-model-box/delete-model-box.component';
import {MatDialogModule} from '@angular/material/dialog';
import {NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { MyOrderComponent } from './my-order/my-order.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { OrderDetailsService } from 'src/services/order-details.service';

import {MatExpansionModule} from '@angular/material/expansion';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule } from '@angular/material/sort';
import { StatusPipe } from './pipes/status.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
    CategoryAddComponent,
    CategoryEditComponent,
    DeleteModelBoxComponent,
    MyOrderComponent,
    StatusPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImageCropperModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule

    

    

  ],
  providers: [UserService, LocalStorageUsersService,ShoppingCartService,MatDatepickerModule,OrderDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
