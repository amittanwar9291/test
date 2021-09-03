import { Component, ViewEncapsulation } from '@angular/core';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { SpineDiscLocationModel } from '@models/shared/spine/localizers/spine-disc-location.model';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-spine-disc-localizer',
  templateUrl: './spine-disc-localizer.component.html',
  styleUrls: ['./spine-disc-localizer.component.scss'],
  providers: [MakeProvider(SpineDiscLocalizerComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpineDiscLocalizerComponent extends LocalizerBase<SpineDiscLocationModel> {
  constructor() {
    super(SpineDiscLocationModel);
  }

  sectorSelection(selectedSector: string) {
    const wasAlreadySelected = this.ngValue[selectedSector];
    const isSingleSelectElement = [
      nameof<SpineDiscLocationModel>(m => m.central),
      nameof<SpineDiscLocationModel>(m => m.paracentralRight),
      nameof<SpineDiscLocationModel>(m => m.paracentralLeft)
    ].includes(selectedSector);

    if (wasAlreadySelected) {
      this.ngValue[selectedSector] = false;
      this.checkAndRemoveAdjacentParts();
    } else {
      if (isSingleSelectElement) {
        Object.keys(this.ngValue).forEach(key => (this.ngValue[key] = key === selectedSector));
      } else {
        this.ngValue[selectedSector] = true;
        Object.keys(this.ngValue).forEach(key => {
          if (!this.getPartsAllowToLeftWithSelected(selectedSector).includes(key)) {
            this.ngValue[key] = false;
          }
        });
      }
    }
    this.announceSelection.emit();
    this.writeValue(this.ngValue);
  }

  isSelectedOrHovered(elem: string) {
    return this.isElementHovered(elem) || this.isElementSelected(elem);
  }

  private checkAndRemoveAdjacentParts() {
    if (!this.ngValue.foraminalRight && this.ngValue.subarticularRight && this.ngValue.extraforaminalRight) {
      this.ngValue.subarticularRight = false;
      this.ngValue.extraforaminalRight = false;
    }
    if (!this.ngValue.foraminalLeft && this.ngValue.subarticularLeft && this.ngValue.extraforaminalLeft) {
      this.ngValue.subarticularLeft = false;
      this.ngValue.extraforaminalLeft = false;
    }
  }

  private getPartsAllowToLeftWithSelected(selectedPrt: string): string[] {
    switch (selectedPrt) {
      case nameof<SpineDiscLocationModel>(m => m.subarticularRight): // 3
        return [
          nameof<SpineDiscLocationModel>(m => m.subarticularRight), // 3
          nameof<SpineDiscLocationModel>(m => m.foraminalRight), // 4
          this.ngValue.foraminalRight ? nameof<SpineDiscLocationModel>(m => m.extraforaminalRight) : '' // 5 if 4 selected
        ];
      case nameof<SpineDiscLocationModel>(m => m.foraminalRight): // 4
        return [
          nameof<SpineDiscLocationModel>(m => m.subarticularRight), // 3
          nameof<SpineDiscLocationModel>(m => m.foraminalRight), // 4
          nameof<SpineDiscLocationModel>(m => m.extraforaminalRight) // 5
        ];
      case nameof<SpineDiscLocationModel>(m => m.extraforaminalRight): // 5
        return [
          nameof<SpineDiscLocationModel>(m => m.foraminalRight), // 4
          nameof<SpineDiscLocationModel>(m => m.extraforaminalRight), // 5
          this.ngValue.foraminalRight ? nameof<SpineDiscLocationModel>(m => m.subarticularRight) : '' // 3 if 4 selected
        ];
      case nameof<SpineDiscLocationModel>(m => m.subarticularLeft): // 7
        return [
          nameof<SpineDiscLocationModel>(m => m.subarticularLeft), // 7
          nameof<SpineDiscLocationModel>(m => m.foraminalLeft), // 8
          this.ngValue.foraminalLeft ? nameof<SpineDiscLocationModel>(m => m.extraforaminalLeft) : '' // 9 if 8 selected
        ];
      case nameof<SpineDiscLocationModel>(m => m.foraminalLeft): // 8
        return [
          nameof<SpineDiscLocationModel>(m => m.subarticularLeft), // 7
          nameof<SpineDiscLocationModel>(m => m.foraminalLeft), // 8
          nameof<SpineDiscLocationModel>(m => m.extraforaminalLeft) // 9
        ];
      case nameof<SpineDiscLocationModel>(m => m.extraforaminalLeft): // 9
        return [
          nameof<SpineDiscLocationModel>(m => m.foraminalLeft), // 8
          nameof<SpineDiscLocationModel>(m => m.extraforaminalLeft), // 9
          this.ngValue.foraminalLeft ? nameof<SpineDiscLocationModel>(m => m.subarticularLeft) : '' // 7 if 8 selected
        ];
    }
  }
}
