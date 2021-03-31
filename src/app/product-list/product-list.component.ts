import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Product } from '../product';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
  productItems!: QueryList<ProductItemComponent>;

  arrayProducts: Product[];

  constructor() {
    this.arrayProducts = [];

  }

  ngOnInit(): void {
  }

  selectedProduct(productComponent: ProductItemComponent){
    alert(`สินค้า ${productComponent.product1.name} ถูกเลือก`);
    this.productItems.forEach(p => {
      p.isSelected = false;
    });
  productComponent.isSelected = true;
  }
}
