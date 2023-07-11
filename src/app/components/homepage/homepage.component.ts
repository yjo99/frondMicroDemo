import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { prodEnvironment } from 'src/app/environments/prod.environment';
import { ResponseViewModel } from 'src/app/models/ResponseViewModel';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{


  products:Product[] = []

  constructor(private http:HttpClient, private cartService: CartService){

  }

  ngOnInit(): void {

    this.http.get<ResponseViewModel>(`${prodEnvironment.api}/api/product`).subscribe(
      response => {
          this.products = response.data;
          console.log(this.products)
      },
      err => {
        alert(err)
      }
    )   
  }

  addProductToCart(product: Product): void{
    this.cartService.addProductToCart(product);
  }
}
