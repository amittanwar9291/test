import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { SoftTissuesFindingUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import {
  AnterolateralTypeEnum,
  CharacterizationCystTypeEnum,
  LateralNeckCystTypeEnum,
  LNCDifferentialDiagnosisEnum,
  LocalizationTypeEnum,
  PeriauricularTypeEnum,
  SideTypeEnum,
  TCDifferentialDiagnosisEnum
} from '@enums/neckMRT/soft-tissues/cysts';

import { AppConfig } from 'app/app.config';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

import { nameof } from 'ts-simple-nameof';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-cysts',
  templateUrl: './cysts.component.html',
  styleUrls: ['./cysts.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CystsComponent {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() isCMReinforced: boolean;
  @Input() lNCDifferentialDiagnosisOptions: DropdownModel[];
  @Input() tCDifferentialDiagnosisOptions: DropdownModel[];

  subscriptions: Subscription[] = [];

  characterizationCystType: typeof CharacterizationCystTypeEnum;
  sideType: typeof SideTypeEnum;
  localizationType: typeof LocalizationTypeEnum;
  lateralNeckCystType: typeof LateralNeckCystTypeEnum;
  lNCDifferentialDiagnosisType: typeof LNCDifferentialDiagnosisEnum;
  periauricularType: typeof PeriauricularTypeEnum;
  anterolateralType: typeof AnterolateralTypeEnum;
  tCDifferentialDiagnosisType: typeof TCDifferentialDiagnosisEnum;

  constructor(private validationHelperService: ValidationHelperService) {
    this.characterizationCystType = CharacterizationCystTypeEnum;
    this.sideType = SideTypeEnum;
    this.localizationType = LocalizationTypeEnum;
    this.lateralNeckCystType = LateralNeckCystTypeEnum;
    this.lNCDifferentialDiagnosisType = LNCDifferentialDiagnosisEnum;
    this.periauricularType = PeriauricularTypeEnum;
    this.anterolateralType = AnterolateralTypeEnum;
    this.tCDifferentialDiagnosisType = TCDifferentialDiagnosisEnum;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.neckMRT.softTissues.fileUpload;
  }

  resetMedianNeckCystGroup(): void {
    this.model.isMNCThickeningOfTheCystWall = false;
    this.model.isMNCStreakySignalEnhancementFatSaturatedT2wSequence = false;
    this.model.isMNCStreakyContrastEnhancementPerifocal = false;
    this.model.isCutaneousFistula = false;

    this.model.sideType = SideTypeEnum.None;
    this.model.localizationType = LocalizationTypeEnum.None;
    this.model.lateralNeckCystType = LateralNeckCystTypeEnum.None;
    this.model.isSuspicionOf = false;
    this.model.isLNCThickeningOfTheCystWall = false;
    this.model.isLNCStreakySignalEnhancementFatSaturatedT2wSequence = false;
    this.model.isLNCStreakyContrastEnhancementPerifocal = false;
    this.model.isSuppurativeThyroiditis = false;
    this.model.lncDifferentialDiagnosis = LNCDifferentialDiagnosisEnum.None;
    this.model.isSubordinate = false;
    this.model.periauricularType = PeriauricularTypeEnum.None;
    this.model.anterolateralType = AnterolateralTypeEnum.None;
    this.model.tcDifferentialDiagnosis = TCDifferentialDiagnosisEnum.None;
    this.model.isTCThickeningOfTheCystWall = false;
    this.model.isTCStreakySignalEnhancementFatSaturatedT2wSequence = false;
    this.model.isTCStreakyContrastEnhancementPerifocal = false;

    this.model.isMedianToThePosteriorWallOfTheNasopharynx =
      this.model.characterizationCystType === CharacterizationCystTypeEnum.TornwaldtCyst;

    this.validationHelperService.removeError(nameof<SoftTissuesFindingUiModel>(m => m.sideType));
  }

  resetIsSubordinate(): void {
    this.model.isSubordinate = false;
  }
}
