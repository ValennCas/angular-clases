import { IProduct } from "./models";

export class ProductsMockService {
    getProducts():IProduct[]{
        return [{
            id:"2",
            name: "Prod 2",
            price:1000
        },
        {
            id:"3",
            name: "Prod 3",
            price:1000
        }]
    }
}