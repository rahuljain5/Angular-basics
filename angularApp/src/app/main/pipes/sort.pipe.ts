import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args: any = 'ascending' ): any {
    let res;
    if (!Array.isArray(value)) {
      return 'Failed';
    }
    if (args !== 'descending') {
      res = value.sort();
    } else {
      res = value.sort();
      res = res.reverse();
    }
    return res;
  }

}
