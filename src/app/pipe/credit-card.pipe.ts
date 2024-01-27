import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
  standalone: true
})
export class CreditCardPipe implements PipeTransform {

  transform(cardNumber: string) : string {

    // “0000000000000000” to this format “0000 – 0000 – 0000 – 0000”.
    if(cardNumber.length == 16){
      const firstPart = cardNumber.substring(0, 4);
      const secondPart = cardNumber.substring(4, 8);
      const thirdPart = cardNumber.substring(8, 12);
      const fourthPart = cardNumber.substring(12, 16);

      return `${firstPart}-${secondPart}-${thirdPart}-${fourthPart}`;

    }

    return "the number must be 16 number";
  }

}
