import { Injectable } from '@angular/core';
import { ICreateProductPayload, IProduct } from './models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

//Le dice a Angular que trate a la clase con posibilidad de inyectar a traves de un constructor
// por inyecion de dependencias
@Injectable({
  providedIn: 'root' // provee a toda la aplicacion
})

//Si no esta providedIn: root -> 
// Se va al modulo donde se usará el service
// se agrega providers: [ProductsService]
// resuelve el problema
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(environment.baseAPIURL + '/products');
  }

  createProducts(payload: ICreateProductPayload): Observable<IProduct>{
    return this.httpClient.post<IProduct>(environment.baseAPIURL + "/products", payload);
  }

  deleteProductById(id: string): Observable<IProduct>{
    return this.httpClient.delete<IProduct>(environment.baseAPIURL + "/products/"+ id);
  }
}
