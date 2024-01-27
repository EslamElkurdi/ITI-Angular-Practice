import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalIDNumberPipe',
  standalone: true
})
export class NationalIDNumberPipePipe implements PipeTransform {




  transform(egyptianId:string, format : string) : string {
// 29909011509345
const birthYear = egyptianId.substring(1, 3);
const birthMonth = egyptianId.substring(3, 5);
const birthDay = egyptianId.substring(5, 7);


    switch(format){
      case 'YY':
        return `19${birthYear}`;
      case 'MM':
        return birthMonth;
      case 'DD':
        return birthDay;
      case 'Full Date':
        return `${birthDay}-${birthMonth}-19${birthYear}`;
      default:
        return 'Please try again!';
    }

  }

  

}
