import { Injectable } from '@angular/core';

import { pickBy, values } from 'lodash';

import { EnumBase } from '@abstractions/enum-base/enum-base.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizersHelperService {
  hasAnyElementSelectedInPart(localizer: EnumBase, part: string = 'left'): boolean {
    const breastProperties = pickBy(localizer, (val: boolean, key: string) => {
      return (key.includes(part) || key.includes(`${part.charAt(0).toUpperCase()}${part.slice(1)}`)) && val;
    });

    return values(breastProperties).length > 0;
  }
}
