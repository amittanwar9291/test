import { Component, Input, OnInit } from '@angular/core';

import { BreastCrossShoulder } from '@models/shared/mamma/breast/breast-cross-shoulder';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

import { IParts } from '@interfaces/parts.interface';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-breast-cross-shoulder',
  templateUrl: './breast-cross-shoulder.component.html',
  styleUrls: ['./breast-cross-shoulder.component.scss'],
  providers: [MakeProvider(BreastCrossShoulderComponent)]
})
export class BreastCrossShoulderComponent extends LocalizerBase<BreastCrossShoulder> implements OnInit {
  @Input() isSideDisabled?: boolean;

  isLeftSelected: boolean;
  isRightSelected: boolean;

  constructor() {
    super(BreastCrossShoulder);
  }

  ngOnInit(): void {
    if (this.isSideDisabled) {
      this.assignWriteCallback(this.setSideDisable);
    }
  }

  setSideDisable(model: BreastCrossShoulder) {
    const countParts = Object.keys(model).reduce(
      (accParts: IParts, key: string): IParts => {
        return model[key]
          ? {
              left: key.includes(nameof<IParts>(p => p.left)) ? accParts.left + 1 : accParts.left,
              right: key.includes(nameof<IParts>(p => p.right)) ? accParts.right + 1 : accParts.right
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
}
