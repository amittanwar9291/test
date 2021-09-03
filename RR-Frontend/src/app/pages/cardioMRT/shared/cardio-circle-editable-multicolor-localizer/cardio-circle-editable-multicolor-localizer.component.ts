import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { ICardioMultiColorLocalizerConfig } from '@interfaces/cardio-multi-color-localizer-configs.interface';

@Component({
  selector: 'rr-cardio-circle-editable-multicolor-localizer',
  templateUrl: './cardio-circle-editable-multicolor-localizer.component.html',
  styleUrls: ['./cardio-circle-editable-multicolor-localizer.component.scss'],
  providers: [MakeProvider(CardioCircleEditableMulticolorLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardioCircleEditableMulticolorLocalizerComponent {
  @Input() isDisabled: boolean;
  @Input() selectionData: ICardioMultiColorLocalizerConfig;
  @Input() showVessels: boolean;
  @Output() sectionToggled = new EventEmitter<number>();

  toggleSection(sectionNumber: number) {
    this.sectionToggled.emit(sectionNumber);
  }

  getColor(sectionNumber: number) {
    const colors = Object.keys(this.selectionData);
    return colors.find(key => {
      return this.selectionData[key].includes(sectionNumber);
    });
  }
}
