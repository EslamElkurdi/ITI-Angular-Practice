import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../components/product/product.component';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() { }

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

 
}
