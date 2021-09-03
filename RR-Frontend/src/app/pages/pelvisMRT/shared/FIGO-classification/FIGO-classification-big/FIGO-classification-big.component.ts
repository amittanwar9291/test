import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FigoClassification } from '@models/pelvisMRT/ui/localizers/figo-classification';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { mapKeys } from 'lodash';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-figo-classification-big',
  templateUrl: './FIGO-classification-big.component.html',
  styleUrls: ['./FIGO-classification-big.component.scss'],
  providers: [MakeProvider(FIGOClassificationBigComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FIGOClassificationBigComponent extends LocalizerBase<FigoClassification> {
  @Output() close = new EventEmitter();

  constructor(public translate: TranslateService) {
    super(FigoClassification);
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
