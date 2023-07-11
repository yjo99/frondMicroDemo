export class Product{
    name!:String;
    description!:String;
    price!:number;
    skuCode!:String
    id!:String;


    constructor(name:String,description:String,price:number,id:String, skuCode: String){
        this.name = name;
        this.skuCode = skuCode;
        this.description = description;
        this.price = price;
        this.id = id;
    }
}