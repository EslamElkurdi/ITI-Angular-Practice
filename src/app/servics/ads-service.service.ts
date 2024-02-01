import { Injectable } from '@angular/core';
import { Observable, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsServiceService {

  adNames:string[];


  constructor() {

    this.adNames = [
      "AdvertiseX",
      "PromoPlus",
      "BrandBoost",
      "MarketMagnet",
      "AdMomentum",
      "Impactify",
      "ClickCraft",
      "BuzzBlitz",
      "EngageWave",
    ];
  }

  getAd(){
    return new Observable<string>((observer) => {
      let i=0;
      setInterval(()=>{
        if(i == this.adNames.length){
          observer.complete();
        }
        observer.next(this.adNames[i]);
         i++
      }, 3000);
    });
  }
}
