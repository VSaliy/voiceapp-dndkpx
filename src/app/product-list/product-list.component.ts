import { Component } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private http: HttpClient) { }
  currencyList: any;
  currencyItems: any;
  currencyItemsUrl = 'http://165.22.28.135:5000/get_coins';

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
    this.currencyList = products;
    this.loadCurrencies();
  }

  loadCurrencies() {
    // this.currencyItems = this.http.get(this.currencyItemsUrl).subscribe((data: Currencies));
    this.currencyItems = this.http.get(this.currencyItemsUrl);

    console.log(this.currencyItems);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
