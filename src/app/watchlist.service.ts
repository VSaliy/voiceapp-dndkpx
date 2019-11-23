import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  items = [];
  
  addToWatchlist(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearWatchlist() {
    this.items = [];
    return this.items;
  }


}