import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products!: Array<Product>;
  constructor() {
    this.products = [
      {id:1, name: "Computer", price: 1200, promotion: true},
      {id:2, name: "Hard drive", price: 180, promotion: false},
      {id:3, name: "Printer", price: 650, promotion: true}
    ];
   }

   public getAllProducts(): Observable<Array<Product>> {
      let randomNumber = Math.random();
      if(randomNumber < 0.1) return throwError(() => new Error("Internet connection error"));
      else return of(this.products);
   }

   public deleteProduct(id: number): Observable<boolean> {
      this.products.filter(p => p.id != id);
      return of(true);

   }

}
