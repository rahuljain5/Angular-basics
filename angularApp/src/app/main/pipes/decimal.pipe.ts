import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let result: any = parseFloat(value);
    result = result ? (result.toFixed(args || 2)) : 'Something went Wrong';
    return result;
  }
}
