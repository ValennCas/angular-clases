import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { ICreateSaleData, ISale } from "./models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";

// const SALES_DB: ISale[] = [
//     {
//         id:1,
//         user: {
//             id:1,
//             createdAt: new Date(),
//             email: "abc@gmail.com",
//             firstName: "Juan",
//             lastName: "Capp",
//             role: "ADMIN"
//         },
//         product: {
//             id:1 ,
//             name: 'IPAD',
//             price: 1000,
//         },
//         quantity:2
//     }
// ] 

@Injectable({
    providedIn: 'root'
})
export class SalesService{

    constructor(
        private httpClient: HttpClient
    ){
        //this.httpClient.get('http://myapi.com/users');
    }

    getSales(): Observable<ISale[]>{
       return this.httpClient.get<ISale[]>(`${environment.baseAPIURL}/sales?_embed=user&_embed=product`)
    }

    getSalesByUserId(userId: string): Observable<ISale[]>{
        //ver si usar expand o no, depende de la version de json-server
        return this.httpClient.get<ISale[]>(`${environment.baseAPIURL}/sales?userId=${userId}&_expand=user&_expand=product`)
    }

    createSales(data: ICreateSaleData){
        if(data.user && data.product && data.quantity){
        //    const newSale: ISale = {
        //     user: data.user,
        //     product: data.product,
        //     quantity: data.quantity,
        //     id: new Date().getTime(),
        //    }
        //    [].push(newSale);
        }
        return of([]);
    }

    deleteSales(id:number){
        // return of(SALES_DB.filter((sale)=> sale.id != id))
    }

    updateSales(id:number, data: ISale){
        // return of(SALES_DB.map((sale) => sale.id === id ? {...sale, ...data} : sale))

    }
}