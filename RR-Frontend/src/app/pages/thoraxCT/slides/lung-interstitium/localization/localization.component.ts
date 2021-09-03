import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import {
  CauseTypeEnum,
  ClassificationTypeEnum,
  DifferentialDiagnosisDetailsTypeEnum,
  DominantPatternTypeEnum,
  IIPHRCTPatternTypeEnum,
  LocalizationAxialTypeEnum,
  LungInterstitiumAreFindingsEnum,
  LungInterstitiumLocalizationCraniocaudalTypeEnum,
  LungInterstitiumDiagnosisTypeEnum,
  SideComparisonTypeEnum,
  SarcoidosisTypeEnum
} from '@enums/thoraxCT/lung-interstitium';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';
import { LungInterstitiumUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LungInterstitiumHelperService, LungInterstitiumLargeLocalizerConfig } from '../lung-interstitium-helper.service';
import { FindingBase } from '@models/shared/finding/finding.base';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent implements OnInit {
  @Input() model: LungInterstitiumUiModel;

  descriptionTypeEnum = DescriptionTypeEnum;
  lungInterstitiumAreFindingsEnum = LungInterstitiumAreFindingsEnum;
  lungInterstitiumDiagnosisTypeEnum = LungInterstitiumDiagnosisTypeEnum;
  dominantPatternTypeEnum = DominantPatternTypeEnum;
  lungInterstitiumLocalizationCraniocaudalTypeEnum = LungInterstitiumLocalizationCraniocaudalTypeEnum;
  localizationAxialTypeEnum = LocalizationAxialTypeEnum;
  sideComparisonTypeEnum = SideComparisonTypeEnum;
  locationTypeEnum = LocationTypeEnum;

  diagnosisDropDownList: DropdownModel[];
  subscriptions: Subscription[] = [];

  notExcludedOptions: string[] = [
    LungInterstitiumDiagnosisTypeEnum.ILDKnownOrigin,
    LungInterstitiumDiagnosisTypeEnum.IdiopathicInterstitialPneumopathy,
    LungInterstitiumDiagnosisTypeEnum.ILDGranulomatous,
    LungInterstitiumDiagnosisTypeEnum.ILDOtherTypes
  ];

  constructor(
    private translate: TranslateService,
    private lungInterstitiumHelperService: LungInterstitiumHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungInterstitium.W026.options').subscribe((out: DropdownModel[]) => {
        this.diagnosisDropDownList = Object.keys(out).map(e => out[e]);
      })
    );
  }

  openLargeLocalizer(whichLocalizer: 'segments' | 'flaps', modelPropName: string) {
    this.lungInterstitiumHelperService.largeLocalizerOpen.next(
      new LungInterstitiumLargeLocalizerConfig(whichLocalizer, true, modelPropName, false)
    );
  }

  clearLocalizer() {
    this.model.lungsFlapsLocation = new LungsFlapsModel();
  }

  onDiagnosisChanged() {
    this.clearDiagnosisProperties();
    this.clearDiagnosisValidationErrors();
  }

  clearDiagnosisProperties() {
    this.model.isSuspected = false;
    this.model.differentialDiagnosis2 = this.lungInterstitiumDiagnosisTypeEnum.None;
    this.model.isSubordinated = false;
    this.model.differentialDiagnosis3 = this.lungInterstitiumDiagnosisTypeEnum.None;
    this.model.causeType1 = CauseTypeEnum.None;
    this.model.causeType2 = CauseTypeEnum.None;
    this.model.causeType3 = CauseTypeEnum.None;
    this.model.iiphrctPatternType1 = IIPHRCTPatternTypeEnum.None;
    this.model.iiphrctPatternType2 = IIPHRCTPatternTypeEnum.None;
    this.model.iiphrctPatternType3 = IIPHRCTPatternTypeEnum.None;
    this.model.classificationType1 = ClassificationTypeEnum.None;
    this.model.classificationType2 = ClassificationTypeEnum.None;
    this.model.classificationType3 = ClassificationTypeEnum.None;
    this.model.differentialDiagnosisDetailsType1 = DifferentialDiagnosisDetailsTypeEnum.None;
    this.model.differentialDiagnosisDetailsType2 = DifferentialDiagnosisDetailsTypeEnum.None;
    this.model.differentialDiagnosisDetailsType3 = DifferentialDiagnosisDetailsTypeEnum.None;
    this.model.sarcoidosisType1 = SarcoidosisTypeEnum.None;
    this.model.sarcoidosisType2 = SarcoidosisTypeEnum.None;
    this.model.sarcoidosisType3 = SarcoidosisTypeEnum.None;
    this.model.isBronchiolitisObliterans = false;
  }

  clearDiagnosisValidationErrors() {
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.causeType1));
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.causeType2));
    this.validationHelperService.removeError(nameof<LungInterstitiumUiModel>(m => m.causeType3));
  }

  onPresetData(data: FindingBase | FindingBase[]) {
    this.lungInterstitiumHelperService.diagnosisPresetData.next(data);
  }
}
