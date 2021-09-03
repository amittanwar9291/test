import { Component, Input, ViewEncapsulation } from '@angular/core';

import { BreastCross } from '@models/shared/mamma/breast/breast-cross.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-breast-cross',
  templateUrl: './breast-cross.component.html',
  styleUrls: ['./breast-cross.component.scss'],
  providers: [MakeProvider(BreastCrossComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BreastCrossComponent extends LocalizerBase<BreastCross> {
  @Input() isSingleSideSelection: boolean;

  leftElements = [
    nameof<BreastCross>(m => m.leftBottomInner),
    nameof<BreastCross>(m => m.leftBottomOuter),
    nameof<BreastCross>(m => m.leftTopInner),
    nameof<BreastCross>(m => m.leftTopOuter)
  ];

  rightElements = [
    nameof<BreastCross>(m => m.rightBottomInner),
    nameof<BreastCross>(m => m.rightBottomOuter),
    nameof<BreastCross>(m => m.rightTopInner),
    nameof<BreastCross>(m => m.rightTopOuter)
  ];

  constructor() {
    super(BreastCross);
  }

  selectBreastElement(selectedElement: string) {
    if (this.isSingleSideSelection) {
      this.resetOtherSideSelection(selectedElement);
    }
    this.selectElement(selectedElement);
  }

  private resetOtherSideSelection(selectedElement: string) {
    if (this.leftElements.includes(selectedElement)) {
      this.resetElements(this.rightElements);
    } else {
      this.resetElements(this.leftElements);
    }
  }

  private resetElements(elements: string[]) {
    Object.keys(this.ngValue).forEach(key => {
      if (elements.includes(key)) {
        this.ngValue[key] = false;
      }
    });
  }
}
