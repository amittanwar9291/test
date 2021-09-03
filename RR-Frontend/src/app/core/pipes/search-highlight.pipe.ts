import { Pipe, PipeTransform } from '@angular/core';

import { trimStart } from 'lodash';

@Pipe({
  name: 'highlight'
})
export class SearchHighlightPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (!args) {
      return;
    }

    args = trimStart(args);

    const sanitizedValue = value.replace(/(\r\n|\n|\r)/gm, ' '); // replacing all newline signs in the translation with a plain whitespace
    const pattern = new RegExp(args, 'gim'); // 'gi' for case insensitive; use just 'g' if you want the search to be case sensitive.
    return sanitizedValue.replace(pattern, '<mark>$&</mark>');
  }
}
