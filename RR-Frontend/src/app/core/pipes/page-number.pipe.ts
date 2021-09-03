import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageNumber'
})
export class PageNumberPipe implements PipeTransform {
  transform(value: any, pageNumber: any): any {
    return '(' + pageNumber + ') ' + value;
  }
}
