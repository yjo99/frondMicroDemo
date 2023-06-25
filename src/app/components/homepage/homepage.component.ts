import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { prodEnvironment } from 'src/app/environments/prod.environment';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{


  products:Product[] = []

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {

    this.http.get<any>(`${prodEnvironment.api}/api/product`).subscribe(
      response => {
        
          
          this.products = response;
       
      },
      err => {
        alert(err)
      }

    )
   
  }

}
