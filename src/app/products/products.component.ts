import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {Product} from "../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Array<Product>;
  errorMessage!: string;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.handleGetAllProducts();
  }
  handleGetAllProducts() {
    this.productsService.getAllProducts().subscribe({
      next: data => this.products = data
      ,
      error: error => this.errorMessage = error
    })
  }
  handleDeleteProduct(p: Product) {
    this.productsService.deleteProduct(p.id).subscribe({
      next: ()=>{
        let index = this.products.indexOf(p);
        this.products.splice(index, 1);
      },
      error: err => this.errorMessage = err
    })
  }
}
