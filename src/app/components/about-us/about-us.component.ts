import { Component } from '@angular/core';
import { AdsServiceService } from '../../servics/ads-service.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

    recivedItem: string = "Ads";
    constructor(private adsService: AdsServiceService){}

    ngOnInit(){
      this.adsService.getAd().subscribe({
        next : (data)=>{
          console.log('Data received');
          this.recivedItem = data;
        }
      })
    }
}
