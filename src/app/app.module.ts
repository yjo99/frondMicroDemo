import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    ProductpageComponent,
    CartComponent,
    NotfoundComponent,
    AddproductComponent,
    CardComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
