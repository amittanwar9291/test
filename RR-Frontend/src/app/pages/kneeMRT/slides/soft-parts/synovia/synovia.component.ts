import { Component, Input } from '@angular/core';

import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';

import {
  CmEnhancementTypeEnum,
  DistributionPatternsTypeEnum,
  FocalTypeEnum,
  HingeTypeEnum,
  SynoviaShapeTypeEnum,
  SynoviaTypeEnum,
  SynoviaCmEnhancementTypeEnum
} from '@enums/kneeMRT/soft-parts';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SoftPartsDiagnosisTypeEnum } from '@enums/kneeMRT/soft-parts/soft-parts-diagnosis-type.enum';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SoftPartsPresetsHttpService } from '@services/kneeMRT/http/soft-parts/soft-parts-presets-http.service';

@Component({
  selector: 'rr-synovia',
  templateUrl: './synovia.component.html',
  styleUrls: ['./synovia.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SoftPartsPresetsHttpService
    }
  ]
})
export class SynoviaComponent {
  @Input() diagnosisList: DropdownModel[];
  @Input() model: SoftPartsFindingUiModel;
  @Input() isCMReinforcedTypeYes: boolean;

  hingeTypeEnum: typeof HingeTypeEnum;
  synoviaTypeEnum: typeof SynoviaTypeEnum;
  cmEnhancementTypeEnum: typeof CmEnhancementTypeEnum;
  synoviaShapeTypeEnum: typeof SynoviaShapeTypeEnum;
  distributionPatternsTypeEnum: typeof DistributionPatternsTypeEnum;
  focalTypeEnum: typeof FocalTypeEnum;
  descriptionTypeEnum: typeof DescriptionTypeEnum;
  synoviaCMEnhancementType: typeof SynoviaCmEnhancementTypeEnum;
  softPartsDiagnosisTypeEnum: typeof SoftPartsDiagnosisTypeEnum;

  constructor() {
    this.hingeTypeEnum = HingeTypeEnum;
    this.synoviaTypeEnum = SynoviaTypeEnum;
    this.cmEnhancementTypeEnum = CmEnhancementTypeEnum;
    this.synoviaShapeTypeEnum = SynoviaShapeTypeEnum;
    this.distributionPatternsTypeEnum = DistributionPatternsTypeEnum;
    this.focalTypeEnum = FocalTypeEnum;
    this.descriptionTypeEnum = DescriptionTypeEnum;
    this.synoviaCMEnhancementType = SynoviaCmEnhancementTypeEnum;
    this.softPartsDiagnosisTypeEnum = SoftPartsDiagnosisTypeEnum;
  }

  isSynovialNodulusGreaterThan1LesionsDisabled() {
    return this.model.synoviaShapeType !== 'SynovialNodulus';
  }

  isFocalTypeDisable() {
    return this.model.distributionPatternsType !== 'Focal';
  }

  clearIsSecondary() {
    this.model.isSecondary = false;
  }

  shouldDifferentialDiagnosis2BeDisabled(): boolean {
    return this.model.descriptionType === 'IDescribe'
      ? this.model.differentialDiagnosis01 === 'None'
      : this.model.differentialDiagnosis === 'None';
  }
}
