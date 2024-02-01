import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { ShadowProductDirective } from '../../directives/shadow-product.directive';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CartItem } from '../../models/cart-product';
import { ProductServiceService } from '../../servics/product-service.service';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../servics/api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ShadowProductDirective,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnChanges,OnInit,OnDestroy {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  products: Iproduct[] = [] as Iproduct[];
  filterdProducts!: Iproduct[];
  cartProducts!: CartItem[];
  productToShoppingCart!: Iproduct;

  @Output() onBuyTotalProducts: EventEmitter<CartItem[]>;
  @Input() recivedselectedCatId!: number;
  @Input() recivedProducts!: { name: Iproduct; quantity: number }[];
  private productSubscription!: Subscription;

  currentItems: CartItem[] = this.cartItemsSubject.value;



  constructor(private apiService: ApiService, private router:Router) {

    this.onBuyTotalProducts = new EventEmitter();
  }
  ngOnDestroy(): void {
    console.log('destroyed');
    this.productSubscription.unsubscribe();

  }
  ngOnInit(): void {
    this.productSubscription = this.apiService.getAllProducts().subscribe((data)=>{
      this.products = data;
      this.filterdProducts = this.products
    })
  }

  filterProduct() {
    this.filterdProducts = this.products.filter(
      (prd) => prd.catId == this.recivedselectedCatId
    );
  }

  goToDetails(id:number){
    this.router.navigate(['/Details',id])
  }

  NotifyToUpdate() {
    for (let i = 0; i < this.currentItems.length; i++) {
      const item = this.currentItems[i];
      if (item.product.quantity === 0) {

        item.product.quantity -= 1;
      }else if(item.product.quantity > 0){
        item.product.quantity -= item.quantity
      }
    }
    this.cartItemsSubject.next([...this.currentItems]);
    this.onBuyTotalProducts.emit(this.currentItems);
  }

  buyProduct(product: Iproduct) {
    this.addToCart(product);
  }

  addToCart(product: Iproduct): void {
    this.currentItems = this.cartItemsSubject.value;
    const existingItemIndex = this.currentItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingItemIndex !== -1) {
      // Item already exists in the cart
      this.currentItems[existingItemIndex].quantity += 1;
      this.cartItemsSubject.next([...this.currentItems]);
      this.onBuyTotalProducts.emit(this.currentItems); // Emit the modified array
    } else {
      // Item doesn't exist in the cart
      const newItem: CartItem = { product, quantity: 1 };
      this.cartItemsSubject.next([...this.currentItems, newItem]);

      this.onBuyTotalProducts.emit([...this.currentItems, newItem]);
    }
    this.currentItems = this.cartItemsSubject.value;
    console.log('Item Added', this.currentItems);
  }

  deleteProduct(product: CartItem): void {
    console.log('Id for delete item: ', product.product.id);
    console.log('product for delete: ', product.product);
    const index = this.currentItems.findIndex(
      (item) => item.product.id == product.product.id
    );

    console.log('index: ', index);

    if (index !== -1 && product.quantity > 1) {
      this.currentItems[index].quantity -= 1;
      console.log(this.currentItems[index]);
      this.cartItemsSubject.next([...this.currentItems]);
    } else if (index !== -1) {
      console.log('Hello delete');
      this.currentItems.splice(index, 1);
      this.cartItemsSubject.next([...this.currentItems]);
      this.onBuyTotalProducts.emit([...this.currentItems]);
    }
    this.currentItems = this.cartItemsSubject.value;
    console.log('DELETED', this.currentItems);
  }

  ngOnChanges() {
    this.apiService.getProductsByCatId(this.recivedselectedCatId).subscribe((data)=>{
      this.filterdProducts = data;
    })
  }
}

export { CartItem };
