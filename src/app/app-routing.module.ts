import { UserProfileComponent } from './Account/UserProfile/UserProfile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { CategoryComponent } from './views/Category/Category.component';
import { CartComponent } from './views/cart/cart.component';
import { CheckoutComponent } from './Checkout/Checkout.component';
import { LoginComponent } from './Login/Login.component';
import { AuthGuard } from './Account/UserProfile/auth.guard';


const routes: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'category/:categoryName', component: CategoryComponent },
  { path: 'product/:id', component: DetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





