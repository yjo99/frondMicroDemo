import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private cartServices: CartService){}

  cartLogo(){
    if (this.cartServices.countProductCart()>0) {
      return true;
    }else{
      return false
    }
  }

  countCart(){    
    return this.cartServices.countProductCart();
   }
}
