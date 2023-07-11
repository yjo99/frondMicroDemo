import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from 'rxjs';
import { orderEnvironment } from "src/app/environments/order.environment";
import { OrderLineItemsDto } from "src/app/models/OrderLineItemsDto";
import { OrderRequest } from "src/app/models/OrderRequest";
import { ResponseViewModel } from "src/app/models/ResponseViewModel";
import { Product } from "src/app/models/product";


@Injectable({
    providedIn: 'root'
  })
  export class CartService{
      
    products: Product[] = [];
    orderLineItemsDtoList: OrderLineItemsDto[] = [];
    orderRequest = new OrderRequest();
    public scoreSubject = new Subject<number>();
    count = 0;

    constructor( private router: Router, private http:HttpClient){}
      
    addProductToCart(product: Product) {
        if(!this.checkProductAdded(product)){
            let order = new OrderLineItemsDto();
            order.price = product.price;
            order.skuCode = product.skuCode;
            order.quantity = 1;
            this.orderLineItemsDtoList.push(order);
            this.products.push(product);
            this.count++;
        }
    }
        
    deleteProductFromCart(index: number) {
        this.products.splice(index, 1);
        this.orderLineItemsDtoList.splice(index, 1);
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
        this.orderRequest.orderLineItemsDtoList = this.orderLineItemsDtoList;
        console.log(this.orderRequest);
        this.http.post<ResponseViewModel>(`${orderEnvironment.api}/api/order`, this.orderRequest).subscribe(
            response =>{
                alert(response.message);
                this.orderLineItemsDtoList = [];
                this.products = [];
                this.count = 0;
                this.router.navigate(['/homepage']);
            },err =>{
                alert(err)
            }
        )
    }
    
  }