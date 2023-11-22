import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <h1>Comparing Angular 1 Components to the latest Angular Components</h1>

    <p>
      <a href="https://coryrylan.com/blog/comparing-angular-1-components-to-the-latest-angular-components">Tutorial at coryrylan.com</a>
    </p>

    <div *ngFor="let product of products">
      <app-product-item [product]="product" (select)="selectedProduct = $event"></app-product-item>
    </div>

    <hr />

    <h3>{{selectedProduct.name}}</h3>
    <p>{{selectedProduct.price | currency:'USD':true:'1.2-2'}}</p>
  `,
})
export class App {
  selectedProduct: any;
  products: { name: string, price: number }[];
  
  constructor() { 
    this.products = [
      { name: 'iPhone', price: 500.00 },
      { name: 'iPad', price: 800.00 },
      { name: 'Macbook', price: 1200.00 }
    ];
    
    this.selectedProduct = this.products[0];
  }
}

bootstrapApplication(App);
