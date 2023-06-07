import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component'

import { SearchComponent } from './search/search.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
const routes: Routes = [

{
  component:HomeComponent,
  path :'' 
},
{
  component:SellerAuthComponent,
  path:'seller-auth'
},
{
  component:SellerHomeComponent,
  path:'seller-home',
  canActivate: [AuthGuard]
},
{
  component:SellerAddProductComponent,
  path:'seller-add-product',
  canActivate : [AuthGuard]
},
{
  component:SellerUpdateProductComponent,
  path:'seller-update-product/:id',
  canActivate:[AuthGuard]
},
{
  component:SearchComponent,
  path:'search/:query'
},
{
  component:ProductDetailsComponent,
  path:'details/:productId'
},
{
  component:UserAuthComponent,
  path:'user-auth'
},
{
  component:CartPageComponent,
    path:'cart-page'
},
{
  component:MyOrdersComponent,
  path:'my-orders'
},
{
  component:CheckoutComponent,
  path:'checkout'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
