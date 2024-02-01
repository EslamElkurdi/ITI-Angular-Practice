import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../servics/api.service';
import { Icategory } from '../../models/icategory';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  productForm!: FormGroup;
  categories!: Icategory[];

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router:Router) {


  }

  ngOnInit() {

    this.apiService.getAllCategories().subscribe((data)=>{
      this.categories = data;
    });

    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
      imgUrl: ['', Validators.required],
      catId: [null, Validators.required]
    });

  }


  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value; // Submit this object to your server
      console.log("New product created:", newProduct);
      this.apiService.addNewProduct(newProduct).subscribe((data)=>{
          console.log(data);
      });

      // navigate
      this.router.navigate(['/Product']);

    }
  }
}
