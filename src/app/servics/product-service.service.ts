import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Iproduct[]
  constructor() {
    this.products = [
      {
        id: 10,
        name: 'Mobile',
        quantity: 4,
        price: 4000,
        imgUrl:
          'https://m.media-amazon.com/images/I/61Y6ue-XHHL._AC_SL1500_.jpg',
        catId: 1,
      },
      {
        id: 20,
        name: 'Laptop',
        quantity: 4,
        price: 8000,
        imgUrl:
          'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp',
        catId: 1,
      },
      {
        id: 30,
        name: 'Tablet',
        quantity: 2,
        price: 2000,
        imgUrl:
          'https://images.pexels.com/photos/430546/pexels-photo-430546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        catId: 2,
      },
      {
        id: 40,
        name: 'Camera',
        quantity: 8,
        price: 6000,
        imgUrl:
          'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        catId: 3,
      },
      {
        id: 50,
        name: 'Headphones',
        quantity: 5,
        price: 2500,
        imgUrl:
          'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        catId: 4,
      },
      {
        id: 60,
        name: 'Smartwatch',
        quantity: 9,
        price: 3000,
        imgUrl:
          'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        catId: 5,
      },
    ];
  }

  getAllProducts(): Iproduct[]{
    return this.products;
  }

  getProductById(id: number): Iproduct | null{
    let product = this.products.find((item) => item.id === id);
    return product?product:null
  }

  getProductByCategoryId(catId:number): Iproduct[]{
    //return all products that belong to a specific category
    return this.products.filter((prd)=>prd.catId==catId)
  }


// What’s the meaning of ProvidedIn: ‘root’, in the service @injectable function? : Done
//Answer>>>>:
// When you set providedIn to 'root',
// you are telling Angular to provide the service at the root level of the application.
// This means that Angular will create a single instance of the service and make it available to all components, services, and directives in the application.


// Explain the following statement: “A service becomes singleton when we apply providedIn property of @Injectable decorator or Declare service in the providers’ array of @ngModule”
//Answer>>>> When you apply the providedIn property of the @Injectable decorator or declare a service in the providers array of the @NgModule decorator,
// you are telling Angular to create a single instance of the service and provide it to all components that depend on it.


// Services in Angular are using Dependency Injection; you’ll need to inject the service in your component constructor, how?
//Answer>>>>:
// 1- Import the service
// 2- Add the service as a constructor parameter
// 3- Use the service in the component.





}
