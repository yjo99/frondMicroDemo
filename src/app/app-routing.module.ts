import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:"homepage", component:HomepageComponent},
  {path:"prod", component:ProductpageComponent},
  {path:"addprod", component:AddproductComponent},
  {path:"cart", component:CartComponent},
  {path:"", component:HomepageComponent},
  {path:"**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
