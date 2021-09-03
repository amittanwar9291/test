import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { SpineElements } from '@environments/spine-localization-map';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { TranslateService } from '@ngx-translate/core';
import { SpineComplexEnabledParts } from '@sharedPages/spine/localizers/spine-complex/spine-complex-enabled-parts.const';

@Component({
  selector: 'rr-spine-complex',
  templateUrl: './spine-complex.component.html',
  styleUrls: ['./spine-complex.component.scss'],
  providers: [MakeProvider(SpineComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpineComplexComponent extends LocalizerBase<SpineLocation> implements OnInit {
  @Input() logicType: SpineLocationLogicTypeEnum;
  @Input() selectionAccessibilityMode: SpineSelectionAccessibilityModeEnum;
  @Input() localizationTitle: string;
  @Input() localizationDescription: string;
  @Input() spineLocalizerPermittedSelection: SpineLocation;
  @Output() close = new EventEmitter();

  /*
  This emitter is used when the component is open
  and we need to listen for changes to update the model
  in case the user does not close the spine-complex
  and goes to another page. (example: Page 6)
  */
  @Output() selectedElement = new EventEmitter();

  logicTypeEnum = SpineLocationLogicTypeEnum;
  spineSelectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;

  constructor(private translateService: TranslateService) {
    super(SpineLocation);
  }

  ngOnInit(): void {
    switch (this.logicType) {
      case SpineLocationLogicTypeEnum.VertebreEach: {
        this.assignSelectCallback(this.selectVertebreEach);
        break;
      }
      case SpineLocationLogicTypeEnum.DiscEach: {
        this.assignSelectCallback(this.selectDiscEach);
        break;
      }
      case SpineLocationLogicTypeEnum.VertebreRange: {
        this.assignSelectCallback(this.selectVertebreRange);
        break;
      }
      case SpineLocationLogicTypeEnum.VertebreAndDiscRange: {
        this.assignSelectCallback(this.selectVertebreAndDiscRange);
        break;
      }
      case SpineLocationLogicTypeEnum.DiscEachIntervertebre: {
        this.assignSelectCallback(this.selectDiscEachIntervertebre);
        break;
      }
      case SpineLocationLogicTypeEnum.OneVertebre: {
        this.assignSelectCallback(this.selectOneVertebre);
        break;
      }
      case SpineLocationLogicTypeEnum.OneDiscWithVertebre: {
        this.assignSelectCallback(this.selectOneDiscWithVertebre);
        break;
      }
    }
  }

  selectElement(name: string): void {
    if (!this.isPermittedToSelect(name)) {
      return;
    }
    super.selectElement(name);
    this.selectedElement.emit();
  }

  selectOneVertebre(name: string) {
    if (!this.isPermittedToSelect(name)) {
      return;
    }
    const element = SpineElements[name];

    if (element.type === 'vertebre') {
      if (!this.ngValue[name]) {
        this.resetSelection();
      }
      this.ngValue[name] = !this.ngValue[name];
    }
  }

  selectOneDiscWithVertebre(name: string) {
    if (!this.isPermittedToSelect(name)) {
      return;
    }
    const element = SpineElements[name];
    let discAboveName: boolean;
    let discUnderName: boolean;

    if (element.type === 'disc') {
      if (!this.ngValue[name]) {
        this.resetSelection();
      }
      this.ngValue[name] = !this.ngValue[name];

      Object.keys(SpineElements).forEach(key => {
        if (SpineElements[key].order === element.order + 2) {
          discUnderName = this.ngValue[key];
        }
        if (SpineElements[key].order === element.order - 2) {
          discAboveName = this.ngValue[key];
        }

        setTimeout(() => {
          if (SpineElements[key].order === element.order + 1) {
            this.ngValue[key] = discUnderName ? true : this.ngValue[name];
          }
        }, 0);

        setTimeout(() => {
          if (SpineElements[key].order === element.order - 1) {
            this.ngValue[key] = discAboveName ? true : this.ngValue[name];
          }
        }, 0);
      });
    }
  }

  selectVertebreEach(name: string) {
    if (!this.isPermittedToSelect(name)) {
      return;
    }
    const element = SpineElements[name];
    if (element.type === 'vertebre') {
      this.ngValue[name] = !this.ngValue[name];
    }
  }

  selectDiscEach(name: string) {
    if (!this.isPermittedToSelect(name)) {
      return;
    }
    const element = SpineElements[name];
    if (element.type === 'disc') {
      this.ngValue[name] = !this.ngValue[name];
    }
  }

  selectVertebreRange(name: string) {
    if (!this.isPermittedToSelect(name)) {
      return;
    }
    const element = SpineElements[name];
    if (element.type !== 'vertebre') {
      return;
    }

    if (this.ngValue[name]) {
      this.resetSelection();
      return;
    }

    this.ngValue[name] = !this.ngValue[name];

    let firstSelected: number = null;
    let lastSelected: number = null;

    for (const key of Object.keys(SpineElements)) {
      if (this.ngValue[key]) {
        const vertebre = SpineElements[key];
        if (firstSelected === null) {
          firstSelected = vertebre.order;
        }
        lastSelected = vertebre.order;
      }
    }

    if (firstSelected !== lastSelected) {
      for (const key of Object.keys(SpineElements)) {
        const spineElement = SpineElements[key];
        if (spineElement.type === 'vertebre') {
          if (spineElement.order >= firstSelected && spineElement.order <= lastSelected) {
            this.ngValue[key] = true;
          }
        }
      }
    }
  }

  selectVertebreAndDiscRange(name: string) {
    if (!this.isPermittedToSelect(name)) {
      return;
    }
    const element = SpineElements[name];
    if (element.type !== 'vertebre') {
      return;
    }
    if (this.ngValue[name]) {
      this.resetSelection();
      return;
    }

    this.ngValue[name] = !this.ngValue[name];

    let firstSelected: number = null;
    let lastSelected: number = null;

    for (const key of Object.keys(SpineElements)) {
      if (this.ngValue[key]) {
        const vertebre = SpineElements[key];
        if (firstSelected === null) {
          firstSelected = vertebre.order;
        }
        lastSelected = vertebre.order;
      }
    }

    if (firstSelected !== lastSelected) {
      for (const key of Object.keys(SpineElements)) {
        const spineElement = SpineElements[key];
        if (spineElement.order >= firstSelected && spineElement.order <= lastSelected) {
          this.ngValue[key] = true;
        }
      }
    }
  }

  selectDiscEachIntervertebre(name: string) {
    if (!this.isPermittedToSelect(name)) {
      return;
    }
    const element = SpineElements[name];
    let discAboveName: boolean;
    let discUnderName: boolean;

    if (element.type === 'disc') {
      this.ngValue[name] = !this.ngValue[name];

      Object.keys(SpineElements).forEach(key => {
        if (SpineElements[key].order === element.order + 2) {
          discUnderName = this.ngValue[key];
        }
        if (SpineElements[key].order === element.order - 2) {
          discAboveName = this.ngValue[key];
        }

        setTimeout(() => {
          if (SpineElements[key].order === element.order + 1) {
            this.ngValue[key] = discUnderName ? true : this.ngValue[name];
          }
        }, 0);

        setTimeout(() => {
          if (SpineElements[key].order === element.order - 1) {
            this.ngValue[key] = discAboveName ? true : this.ngValue[name];
          }
        }, 0);
      });
    }
  }

  resetSelection() {
    for (const key of Object.keys(SpineElements)) {
      this.ngValue[key] = false;
    }
  }

  isLogicType(name: string) {
    return this.logicType === name;
  }

  isTextVertebreSelected(name: string) {
    return this.isElementSelected(name) || (this.isElementHovered(name) && this.areVertebraeClickable());
  }

  emphasisDisc(name: string) {
    return this.logicType === SpineLocationLogicTypeEnum.DiscEachIntervertebre && this.isElementSelected(name);
  }

  areVertebraeClickable() {
    return (
      this.logicType === SpineLocationLogicTypeEnum.VertebreEach ||
      this.logicType === SpineLocationLogicTypeEnum.VertebreRange ||
      this.logicType === SpineLocationLogicTypeEnum.VertebreAndDiscRange ||
      this.logicType === SpineLocationLogicTypeEnum.OneVertebre
    );
  }

  areDiscsClickable() {
    return (
      this.logicType === SpineLocationLogicTypeEnum.DiscEach ||
      this.logicType === SpineLocationLogicTypeEnum.DiscEachIntervertebre ||
      this.logicType === SpineLocationLogicTypeEnum.OneDiscWithVertebre
    );
  }

  isPermittedToSelect(element: string): boolean {
    const baseEnabledParts = this.selectionAccessibilityMode ? SpineComplexEnabledParts[this.selectionAccessibilityMode] : null;
    const firstPageEnabledParts = this.spineLocalizerPermittedSelection ? this.spineLocalizerPermittedSelection : null;
    if (!baseEnabledParts && !firstPageEnabledParts) {
      return true;
    } else if (baseEnabledParts && !firstPageEnabledParts) {
      return baseEnabledParts[element];
    } else if (!baseEnabledParts && firstPageEnabledParts) {
      return firstPageEnabledParts[element];
    } else if (baseEnabledParts && firstPageEnabledParts) {
      return baseEnabledParts[element] && firstPageEnabledParts[element];
    } else {
      return true;
    }
  }

  closeLargeLocalizer() {
    this.close.emit();
  }

  isElementDiscInRange(name: string): boolean {
    return (
      this.isElementSelected(name) && SpineElements[name].type === 'disc' && this.logicType === this.logicTypeEnum.VertebreAndDiscRange
    );
  }

  moveLabelsToCenter(): number {
    switch (this.translateService.store.currentLang) {
      case 'en':
        return 6;
      default:
        return 0;
    }
  }
}
