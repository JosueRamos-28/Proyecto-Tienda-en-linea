import { UserProfileComponent } from './Account/UserProfile/UserProfile.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { HomeComponent } from './views/home/home.component';
import { CategoryComponent } from './views/Category/Category.component';
import { DetailComponent } from './views/detail/detail.component';
import { ListComponent } from './views/list/list.component';
import { CartComponent } from './views/cart/cart.component';
import { ProductListComponent } from './views/ProductList/ProductList.component';
import { ProductAddedDialogComponent } from './views/ProductAddedDialog/ProductAddedDialog.component';


import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { EmptyCartDialogComponent } from './views/EmptyCartDialog/EmptyCartDialog.component';
import { AdSliderComponent } from './AdSlider/AdSlider.component';
import { LoginComponent } from './Login/Login.component';
import { CheckoutComponent } from './Checkout/Checkout.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    DetailComponent,
    ListComponent,
    CartComponent,
    ProductListComponent,
    EmptyCartDialogComponent,
    ProductAddedDialogComponent,
    AdSliderComponent,
    LoginComponent,
    CheckoutComponent,
    UserProfileComponent,

    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
