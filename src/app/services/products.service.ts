import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {id: 1, name: 'Ionic Appflow', description: 'Continuous mobile devops tools & services',
    image: 'https://ionicframework.com/img/meta/products-appflow-og.png'},
    {id: 2, name: 'Ionic Studio', description: 'Ionic integrated development environment',
     image: 'https://ionicframework.com/img/meta/products-studio-og.png'},
    {id: 3, name: 'Ionic Enterprise Edition', description: 'The trusted app foundation for enterprise',
    image: 'https://ionicframework.com/img/meta/products-ee-og.png'}
  ];

  constructor() { }

   /**
   * Simulate GET /products.
   */
  getAllProducts() {
    return this.products;
  }

  /**
   * Simulate GET /products/:id
   *
   */
  getProductById(id: number) {
    return this.products
      .filter(product => product.id === id)
      .pop();
  }
}
