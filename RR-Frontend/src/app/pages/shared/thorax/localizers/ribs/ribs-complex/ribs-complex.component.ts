import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { RibsModel } from '@models/shared/thorax/localizers/ribs.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

@Component({
  selector: 'rr-ribs-complex',
  templateUrl: './ribs-complex.component.html',
  styleUrls: ['./ribs-complex.component.scss'],
  providers: [MakeProvider(RibsComplexComponent)]
})
export class RibsComplexComponent extends LocalizerBase<RibsModel> {
  @Input() localizationDescription: string;
  @Input() descriptionRrid: string;
  @Output() close = new EventEmitter();
  @Output() selectedElement = new EventEmitter();

  constructor() {
    super(RibsModel);
  }

  onClose() {
    this.close.emit();
  }

  getContainerElementClass(name: string): string {
    if (this.ngValue[name]) {
      return 'cls-12 element-selected';
    } else if (this.isElementHovered(name)) {
      return 'element-hoverd';
    } else {
      return 'cls-13';
    }
  }

  getElementClass(name: string): string {
    if (this.ngValue[name]) {
      return 'cls-7 element-selected';
    } else if (this.isElementHovered(name)) {
      return 'cls-2';
    } else {
      return 'cls-14';
    }
  }

  getTextClass(elementName: string): string {
    if (this.ngValue[elementName]) {
      return 'cls-7';
    } else if (this.isElementHovered(elementName)) {
      return 'cls-9 cls-2';
    } else {
      return 'cls-8';
    }
  }

  selectNewElement(element: string): void {
    this.selectElement(element);
    this.selectedElement.emit();
  }

  getLocalizationDescription(descriptionKey: string) {
    if (!descriptionKey) {
      return this.singleChoiceMode
        ? 'shared.thorax.localizers.ribsLocalizer.descriptionSingleSelection'
        : 'shared.thorax.localizers.ribsLocalizer.descriptionMultiSelection';
    }
    return descriptionKey;
  }
}
