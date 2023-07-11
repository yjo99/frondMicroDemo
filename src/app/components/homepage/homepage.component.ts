import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { prodEnvironment } from 'src/app/environments/prod.environment';
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

    this.http.get<any>(`${prodEnvironment.api}/api/product`).subscribe(
      response => {
        
          
          this.products = response;
          console.log(this.products)
       
      },
      err => {
        alert(err)
      }

    )
    this.getProducts();
   
  }

  addProductToCart(product: Product): void{
    this.cartService.addProductToCart(product);
  }

  getProducts(){
    this.products.push(new Product("aaaaaa", "dddddddddddd", 256, "145"));
    this.products.push(new Product("bbbbbbb", "dddddddddddd", 256, "146"));
    this.products.push(new Product("ffff", "dddddddddddd", 256, "147"));
    this.products.push(new Product("ttt", "dddddddddddd", 256, "148"));
    this.products.push(new Product("eee", "dddddddddddd", 256, "149"));
    this.products.push(new Product("qqq", "dddddddddddd", 256, "141"));
  }

}
