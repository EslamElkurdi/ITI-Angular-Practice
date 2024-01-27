import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IdCardComponent } from './components/id-card/id-card.component';
import { NationalIDNumberPipePipe } from './pipe/national-idnumber-pipe.pipe';
import { OrderComponent } from './components/order/order/order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductComponent,NavbarComponent,FooterComponent,IdCardComponent,NationalIDNumberPipePipe,OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day_2';
}
