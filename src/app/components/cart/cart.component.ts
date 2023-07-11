import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public cartService: CartService){}

  deleteProduct(index: number) {
    this.cartService.deleteProductFromCart(index);
  }

  allTotalPrice(): number{
    let totalPrice = 0;
    this.cartService.orders.forEach(order => {
      totalPrice += order.price * order.quantity;
    });
    return totalPrice;
  }

  orderConfirm(){
    this.cartService.sendOrder();
  }

  valid(){
    return !(this.cartService.orders.length > 0);
  }

}
