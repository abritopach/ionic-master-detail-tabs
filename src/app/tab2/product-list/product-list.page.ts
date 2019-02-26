import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  products: any;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

}
