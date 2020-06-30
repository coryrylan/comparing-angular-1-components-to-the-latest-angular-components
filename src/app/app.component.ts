import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
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
