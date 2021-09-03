import { Component } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { BreastFullCrossShoulder } from '@models/shared/mamma/breast/breast-full-cross-shoulder';

import { IParts } from '@interfaces/parts.interface';

import { lowerFirst, upperFirst } from 'lodash';

@Component({
  selector: 'rr-breast-full-cross-shoulder',
  templateUrl: './breast-full-cross-shoulder.component.html',
  styleUrls: ['./breast-full-cross-shoulder.component.scss'],
  providers: [MakeProvider(BreastFullCrossShoulderComponent)]
})
export class BreastFullCrossShoulderComponent extends LocalizerBase<BreastFullCrossShoulder> {
  isRightSelected = false;
  isLeftSelected = false;

  constructor() {
    super(BreastFullCrossShoulder);
    this.assignWriteCallback(this.initNgModel);
  }

  initNgModel(model: BreastFullCrossShoulder): void {
    const countParts = Object.keys(model).reduce(
      (accParts: IParts, key: string): IParts => {
        return model[key]
          ? {
              left: key.toLowerCase().includes('left') ? accParts.left + 1 : accParts.left,
              right: key.toLowerCase().includes('right') ? accParts.right + 1 : accParts.right
            }
          : accParts;
      },
      {
        left: 0,
        right: 0
      }
    );

    this.isLeftSelected = countParts.left !== 0;
    this.isRightSelected = countParts.right !== 0;
  }

  selectElement(elementName: string): void {
    const breastSide = this.getBreastSide(elementName);
    const singleChoiceElements = [
      `${lowerFirst(breastSide)}Middle`,
      `${lowerFirst(breastSide)}Ring`,
      `${lowerFirst(breastSide)}Top`,
      `${lowerFirst(breastSide)}Bottom`,
      `outer${upperFirst(breastSide)}`,
      `inner${upperFirst(breastSide)}`
    ];

    if (breastSide && singleChoiceElements.includes(elementName)) {
      singleChoiceElements.forEach(singleChoiceElementName => {
        if (singleChoiceElementName !== elementName) {
          this.ngValue[singleChoiceElementName] = false;
        }
      });
    }

    super.selectElement(elementName);
  }

  getBreastSide(elementName: string): string {
    return elementName.match(/right|left/i)[0];
  }
}
