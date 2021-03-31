import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('productList', {static:true})
  productList!: ProductListComponent;

  title = 'lab4';

  ngOnInit(){
    this.productList.arrayProducts = [
    {
      name: 'ส้มโอ',
      price: 990,
      image:'../assets/img/ส้มโอทับทิมสยาม.jfif'
    },
    {
      name: 'แตงโม',
      price: 1000,
      image:'../assets/img/แตงโม.jfif'

    },
    {
      name: 'มะพร้าวน้ำหอม',
      price: 500,
      image:'../assets/img/มะพร้าว.jfif'

    },

    ];
  }

}
