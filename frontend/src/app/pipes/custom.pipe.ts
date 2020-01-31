import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return '฿' + value.replace(/,/g, '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
