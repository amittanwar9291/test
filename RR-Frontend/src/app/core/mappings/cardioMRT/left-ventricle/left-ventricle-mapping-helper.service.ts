import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeftVentricleMappingHelperService {
  mapLocCollectionToLocString(coll: number[]) {
    if (coll.length !== 0) {
      return coll.map(section => `Section${section}`).join(', ');
    } else {
      return 'None';
    }
  }

  mapLocStringToLocCollection(locString: string) {
    if (locString !== 'None') {
      return locString.split(', ').map(item => parseInt(item.substring(7), null));
    } else {
      return [];
    }
  }
}
