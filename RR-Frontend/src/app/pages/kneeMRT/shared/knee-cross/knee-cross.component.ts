import { Component, Input, ViewEncapsulation } from '@angular/core';

import { KneeCross } from '@models/kneeMRT/ui/knee/knee-cross.model';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-knee-cross',
  templateUrl: './knee-cross.component.html',
  styleUrls: ['./knee-cross.component.scss'],
  providers: [MakeProvider(KneeCrossComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class KneeCrossComponent extends LocalizerBase<KneeCross> {
  @Input() activePart: 'inner' | 'outer';
  elementsSplit = {
    inner: [nameof<KneeCross>(m => m.pHMM), nameof<KneeCross>(m => m.iPMM), nameof<KneeCross>(m => m.aHMM)],
    outer: [nameof<KneeCross>(m => m.pHLM), nameof<KneeCross>(m => m.iPLM), nameof<KneeCross>(m => m.aHLM)]
  };

  constructor() {
    super(KneeCross);
  }

  shouldBeActive(elem: string): boolean {
    if (!this.activePart) {
      return true;
    } else {
      return this.elementsSplit[this.activePart].includes(elem);
    }
  }

  getElementClass(elementName: string): string {
    if (!this.shouldBeActive(elementName)) {
      return 'knee-cross-area-inactive';
    } else if (this.ngValue[elementName]) {
      return 'knee-cross-area-checked';
    } else if (this.isElementHovered(elementName)) {
      return 'knee-cross-area-hovered';
    } else {
      return '';
    }
  }

  selectElement(name: string) {
    if (this.shouldBeActive(name)) {
      super.selectElement(name);
    }
  }
}
