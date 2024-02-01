import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../../servics/cart-service.service';
import { ProductServiceService } from '../../servics/product-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  productId: number=0;
  product: Iproduct | null = null;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductServiceService, private location:Location){}

  ngOnInit(){
    this.productId= Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(this.productId);
  }

  goBack(){
    // window.history.back();
    this.location.back()
  }
}
