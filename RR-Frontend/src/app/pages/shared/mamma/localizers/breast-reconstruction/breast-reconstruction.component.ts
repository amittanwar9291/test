import { Component, Input } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { NgModelAccessorBase, MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

import { IBreastReconstructionTranslationsKeys } from '@interfaces/shared/mamma/breast-reconstruction-translations-keys.interface';

import { LocalizersHelperService } from '@services/shared/localizers/localizers-helper.service';

import { BreastReconstruction } from '@models/shared/mamma/breast/breast-reconstruction.model';
import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { BreastLocation } from '@models/shared/mamma/breast/breast-location.model';

import { SideType } from '@enums/shared/mamma/anamnesis-medical-history';

@Component({
  selector: 'rr-breast-reconstruction',
  templateUrl: './breast-reconstruction.component.html',
  styleUrls: ['./breast-reconstruction.component.scss'],
  providers: [MakeProvider(BreastReconstructionComponent)]
})
export class BreastReconstructionComponent extends NgModelAccessorBase<BreastReconstruction> {
  @Input() name: string;
  @Input() breastLocation: BreastSimple | BreastLocation;

  @Input() set disabled(val: boolean) {
    this.disabledVal = val;
    if (val) {
      this.ngValue = new BreastReconstruction();
    }
  }

  @Input() labels: IBreastReconstructionTranslationsKeys;

  @Input() rrModulePrefix = 'mam_m';

  sideType = SideType;
  disabledVal: boolean;

  constructor(private localizersHelper: LocalizersHelperService, private translateService: TranslateService) {
    super();
    this.ngValue = new BreastReconstruction();
  }

  changeState() {
    this.writeValue(this.ngValue);
  }

  get isLeftBreastReconstructionDisabled(): boolean {
    return !this.localizersHelper.hasAnyElementSelectedInPart(this.breastLocation, 'left') && !this.disabledVal;
  }

  get isRightBreastReconstructionDisabled(): boolean {
    return !this.localizersHelper.hasAnyElementSelectedInPart(this.breastLocation, 'right') && !this.disabledVal;
  }

  getRrId(id: string): string {
    return `${this.rrModulePrefix}_${id}`;
  }
}
