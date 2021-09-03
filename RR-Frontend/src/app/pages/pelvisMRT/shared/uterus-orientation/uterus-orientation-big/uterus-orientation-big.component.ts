import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { UterusOrientation } from '@models/pelvisMRT/ui/localizers/uterus-orientation';
import { TranslateService } from '@ngx-translate/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { mapKeys } from 'lodash';

@Component({
  selector: 'rr-uterus-orientation-big',
  templateUrl: './uterus-orientation-big.component.html',
  styleUrls: ['./uterus-orientation-big.component.scss'],
  providers: [MakeProvider(UterusOrientationBigComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UterusOrientationBigComponent extends LocalizerBase<UterusOrientation> {
  @Output() close = new EventEmitter();

  constructor(public translate: TranslateService) {
    super(UterusOrientation);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }
  selectSingleElement(element: string): void {
    let selected = '';
    mapKeys(this.ngValue, (value, key) => {
      if (value) {
        selected = key;
      }
    });
    if (selected) {
      if (selected === element) {
        this.selectElement(element);
      } else {
        this.selectElement(selected);
        this.selectElement(element);
      }
    } else {
      this.selectElement(element);
    }
  }
}
