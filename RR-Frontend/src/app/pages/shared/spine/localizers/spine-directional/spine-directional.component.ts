import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';

import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';

import { ButtonPositions } from './button-positions-map';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-spine-directional',
  templateUrl: './spine-directional.component.html',
  styleUrls: ['./spine-directional.component.scss'],
  providers: [MakeProvider(SpineDirectionalComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpineDirectionalComponent extends NgModelAccessorBase<SpineDirectionalLocation> implements OnInit {
  @Input() discLocalization: boolean;
  @Input() localizationTitle: string;
  @Input() localizationDescription: string;
  @Input() spineLocalizerPermittedSelection: SpineLocation;
  @Output() close = new EventEmitter();
  hoveredElement: string;
  buttons: Array<any>;

  constructor(private translate: TranslateService) {
    super();

    this.ngValue = new SpineDirectionalLocation();
    this.hoveredElement = 'None';
  }

  changeState() {
    this.writeValue(this.ngValue);
  }

  ngOnInit() {
    this.buttons = this.discLocalization ? ButtonPositions.disc : ButtonPositions.vertebrae;
  }

  isButtonSelected(elementName: string, side?: string) {
    return side ? this.ngValue[elementName][side] : this.ngValue[elementName].right || this.ngValue[elementName].left;
  }

  isElementSelected(elementName: string) {
    return this.ngValue[elementName].right || this.ngValue[elementName].left;
  }

  isButtonHovered(name: string, side: string) {
    return this.hoveredElement === name + '_' + side;
  }

  isElementHovered(name: string) {
    return this.hoveredElement.split('_')[0] === name;
  }

  hoverElement(name: string, side: string) {
    if (!this.isPermittedToSelect(name)) {
      return;
    }
    this.hoveredElement = name + '_' + side;
  }

  unhoverElement() {
    this.hoveredElement = 'None';
  }

  selectElement(elementName: string, side: string) {
    if (!this.isPermittedToSelect(elementName)) {
      return;
    }
    this.ngValue[elementName][side] = !this.ngValue[elementName][side];
    this.writeValue(this.ngValue);
  }

  closeLargeLocalizer() {
    this.close.emit();
  }

  isPermittedToSelect(name: string) {
    const elementName = ['osCoccygis', 'osSacrum'].includes(name) || name.includes('d') ? name : name + 'd';
    if (!this.spineLocalizerPermittedSelection) {
      return true;
    } else if (this.discLocalization) {
      return this.spineLocalizerPermittedSelection[elementName];
    } else {
      return this.spineLocalizerPermittedSelection[name];
    }
  }

  getTextXAxisPosition(): number {
    return this.translate.currentLang === 'en' ? 8 : 0;
  }
}
