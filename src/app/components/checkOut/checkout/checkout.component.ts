import { Component, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../product/product.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
[x: string]: any;
  @Output() onBuyTotalProductsUpdated: EventEmitter<CartItem[]>;


  constructor(){
    this.onBuyTotalProductsUpdated = new EventEmitter();
  }


  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  removeProduct(product: CartItem): void {
    const currentItems = this.cartItemsSubject.value;
    const index = currentItems.findIndex(item => item.product.id === product.product.id);


    if (index !== -1) {
      currentItems.splice(index, 1);
      this.cartItemsSubject.next([...currentItems]);
    }

    this.onBuyTotalProductsUpdated.emit([...currentItems]);
  }
}
