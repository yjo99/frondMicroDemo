import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { prodEnvironment } from 'src/app/environments/prod.environment';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
   productFG!:FormGroup
   message:any;
   isError:boolean = false;

  constructor(private http:HttpClient){
  }

  ngOnInit(): void {
    this.productFG = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(3)]),
      description: new FormControl('', [Validators.required,Validators.minLength(3)]),
      price: new FormControl(0, [Validators.required])
    })
  }

  get name():FormControl{
    return this.productFG.get('name') as FormControl;
  }

  get description():FormControl{
    return this.productFG.get('description') as FormControl;
  }

  get price():FormControl{
    return this.productFG.get('price') as FormControl;
  }

  addProduct():void{

    this.http.post(`${prodEnvironment.api}/api/product`,new Product(this.name.value, this.description.value,this.price.value,"","")).subscribe(
      response => {
        console.log("response")
        console.log(response)
        this.message = response;
        
        
      },
      error => {
        console.log("error")
        console.log(error)
        this.message = error
        this.isError = true
        
      }
    )

  }

  messageExist():boolean{
    if(this.message !== undefined){
      return true;
    }
    return false;
  }

}
