import { Injectable } from '@angular/core';

import { VertebralBoneDirection } from '@models/spineMRT/ui/spine/verteblar-bone-direction.model';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';

@Injectable({
  providedIn: 'root'
})
export class SpineDirectionalLocationMapper {
  constructor() {}

  mapToObject(sourceString: string, outObject: SpineDirectionalLocation): SpineDirectionalLocation {
    if (sourceString === 'None') {
      return;
    }
    const boneDirectionArr = sourceString.split(', ');
    boneDirectionArr.forEach(boneDirectionProp => {
      if (boneDirectionProp.charAt(boneDirectionProp.length - 1) === 'R') {
        outObject[this.toUiName(boneDirectionProp)].right = true;
      } else if (boneDirectionProp.charAt(boneDirectionProp.length - 1) === 'L') {
        outObject[this.toUiName(boneDirectionProp)].left = true;
      }
    });

    return outObject;
  }

  mapToString(sourceObject: SpineDirectionalLocation): string {
    let outputString = '';
    for (const key in sourceObject) {
      if (sourceObject.hasOwnProperty(key) && sourceObject[key]) {
        outputString += this.toApiName(sourceObject[key], key);
      }
    }

    if (outputString.length > 2) {
      outputString = outputString.slice(0, -2);
    }

    if (outputString.length <= 2) {
      return 'None';
    }

    return outputString;
  }

  private toApiName(boneDirection: VertebralBoneDirection, key: string): string {
    const leftString = '_L';
    const rightString = '_R';
    const keyString = this.toUpper(key.replace('H', ''));

    if (boneDirection.right && boneDirection.left) {
      return `${keyString}${rightString}, ${keyString}${leftString}, `;
    }
    if (boneDirection.right) {
      return `${keyString}${rightString}, `;
    }
    if (boneDirection.left) {
      return `${keyString}${leftString}, `;
    }
    return '';
  }

  private toUiName(apiName: string): string {
    const replacedApiName = apiName.replace('T', 'tH');
    return this.toLower(replacedApiName.slice(0, replacedApiName.length - 2));
  }

  private toUpper(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private toLower(str: string) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
}
