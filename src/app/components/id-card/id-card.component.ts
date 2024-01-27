import { Component, NgModule, OnChanges, SimpleChanges } from '@angular/core';
import { NationalIDNumberPipePipe } from '../../pipe/national-idnumber-pipe.pipe';
import { CreditCardPipe } from '../../pipe/credit-card.pipe';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-id-card',
  standalone: true,
  imports: [NationalIDNumberPipePipe, CreditCardPipe,FormsModule],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.css'
})
export class IdCardComponent  {



  cardNumber = '';
  // private crdit:CreditCardPipe = new CreditCardPipe();

  formatCardNumber() {
    // No need to do anything here, the pipe handles formatting automatically
  }








}
