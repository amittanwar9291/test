import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';
import {
  DifferentialDiagnosisTypeEnum,
  HistologyKnownTypeEnum,
  HomogeneityTypeEnum,
  LocalizationAxialTypeEnum,
  MarginTypeEnum
} from '@enums/neckMRT/larynx';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { LarynxPresetHttpService } from '@services/neckMRT/http/larynx/larynx-preset-http.service';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: LarynxPresetHttpService
    }
  ]
})
export class CharacterizationOneComponent {
  @Input() model: LarynxFindingUiModel;
  @Input() diffDiagnosisOptions: DropdownGroupedModel[];

  descriptionType: typeof DescriptionTypeEnum;
  differentialDiagnosistype: typeof DifferentialDiagnosisTypeEnum;
  histologyKnownType: typeof HistologyKnownTypeEnum;
  localizationAxialType: typeof LocalizationAxialTypeEnum;
  marginType: typeof MarginTypeEnum;
  homogeneityType: typeof HomogeneityTypeEnum;

  constructor() {
    this.descriptionType = DescriptionTypeEnum;
    this.differentialDiagnosistype = DifferentialDiagnosisTypeEnum;
    this.histologyKnownType = HistologyKnownTypeEnum;
    this.localizationAxialType = LocalizationAxialTypeEnum;
    this.marginType = MarginTypeEnum;
    this.homogeneityType = HomogeneityTypeEnum;
  }

  resetDifferentialDiagnosisDependantModel(): void {
    this.model.isHistologyKnown = false;
    this.model.histologyKnownType = HistologyKnownTypeEnum.None;
    this.model.isSuspected = false;
    this.model.differentialDiagnosis2 = DifferentialDiagnosisTypeEnum.None;
    this.model.isSubordinated = false;
  }

  resetBothPlanes(): void {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.resetThirdPlane();
    }
  }

  resetThirdPlane(): void {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
}
