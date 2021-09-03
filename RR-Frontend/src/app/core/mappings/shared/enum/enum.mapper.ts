import { Injectable } from '@angular/core';

import { EnumBase } from '@abstractions/enum-base/enum-base.model';

@Injectable({
  providedIn: 'root'
})
export class EnumMapper {
  constructor() {}

  mapToObject(sourceString: string, outObject: EnumBase): EnumBase {
    const enumArr = sourceString.split(', ');

    for (const enumVal in enumArr) {
      if (outObject.hasOwnProperty(this.toLower(enumArr[enumVal]))) {
        outObject[this.toLower(enumArr[enumVal])] = true;
      }
    }
    return outObject;
  }

  mapToString(sourceObject: EnumBase): string {
    let outputString = '';
    for (const key in sourceObject) {
      if (sourceObject.hasOwnProperty(key)) {
        if (sourceObject[key]) {
          outputString += this.toUpper(key.toString()) + ', ';
        }
      }
    }

    if (outputString.length > 2) {
      outputString = outputString.slice(0, -2);
    }

    if (outputString.length <= 1) {
      return 'None';
    }

    return outputString;
  }

  private toUpper(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private toLower(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
}
