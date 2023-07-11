import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { orderEnvironment } from "src/app/environments/order.environment";
import { OrderLineItemsDto } from "src/app/models/OrderLineItemsDto";
import { Product } from "src/app/models/product";


@Injectable({
    providedIn: 'root'
  })
  export class CartService{
      
    products: Product[] = [];
    orders: OrderLineItemsDto[] = [];
    public scoreSubject = new Subject<number>();
    count = 0;

    constructor(private http:HttpClient){}
      
    addProductToCart(product: Product) {
        if(!this.checkProductAdded(product)){
            let order = new OrderLineItemsDto();
            order.id = +product.id;
            order.price = product.price;
            order.skuCode = product.name;
            order.quantity = 1;
            this.orders.push(order);
            this.products.push(product);
            this.count++;
        }
    }
        
    deleteProductFromCart(index: number) {
        this.products.splice(index, 1);
        this.orders.splice(index, 1);
        this.count--;
    }

    checkProductAdded(product: Product): boolean{
        for(var prod of this.products){
            if(product.id == prod.id)
                return true;
        }
        return false;
    }

    countProductCart(): number {
        this.scoreSubject.next(this.count);
        return this.count;
    }

    sendOrder(){
        console.log(this.orders);
        this.http.post<any>(`${orderEnvironment.api}/api/order`, this.orders).subscribe(
            response =>{
                alert(response);
                this.orders = [];
                this.products = [];
                this.count = 0;
            },err =>{
                alert(err)
            }
        )
    }
    
  }