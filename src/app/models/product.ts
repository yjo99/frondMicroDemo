export class Product{
    name!:String;
    description!:String;
    price!:number;
    id!:String;


    constructor(name:String,description:String,price:number,id:String){
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = id;
    }
}