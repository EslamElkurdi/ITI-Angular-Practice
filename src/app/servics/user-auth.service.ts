import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isLoggedStatus: BehaviorSubject<boolean>;


  constructor() {
      this.isLoggedStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
   }

   login(email: string,password: string){
      let token = "773kkv8hhhhfhskirjc";
      localStorage.setItem('token', token)
      this.isLoggedStatus.next(true);
   }

   logout(){
    localStorage.removeItem('token')
    this.isLoggedStatus.next(false);
   }

   isLoggedIn(){
    return localStorage.getItem('token')?true: false;
   }

   getLoggedStatus(): BehaviorSubject<boolean>{
    return  this.isLoggedStatus;
   }
}
