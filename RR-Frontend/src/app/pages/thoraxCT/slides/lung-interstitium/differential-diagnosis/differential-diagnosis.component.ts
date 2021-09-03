import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  CauseTypeEnum,
  ClassificationTypeEnum,
  DifferentialDiagnosisDetailsTypeEnum,
  IIPHRCTPatternTypeEnum,
  LungInterstitiumDiagnosisTypeEnum,
  SarcoidosisTypeEnum
} from '@enums/thoraxCT/lung-interstitium';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LungInterstitiumUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-differential-diagnosis-tab',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnInit {
  @Input() model: LungInterstitiumUiModel;

  diagnosisDropDownList: DropdownGroupedModel[];
  classificationDropDownList: DropdownGroupedModel[];
  causeDropdownList: DropdownModel[];

  causeTypeEnum = CauseTypeEnum;
  classificationTypeEnum = ClassificationTypeEnum;
  lungInterstitiumDiagnosisTypeEnum = LungInterstitiumDiagnosisTypeEnum;
  iiphrctPatternTypeEnum = IIPHRCTPatternTypeEnum;
  differentialDiagnosisDetailsTypeEnum = DifferentialDiagnosisDetailsTypeEnum;
  sarcoidosisTypeEnum = SarcoidosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  subscriptions: Subscription[] = [];

  private diagnosisDictionary = {
    1: 'differentialDiagnosis1',
    2: 'differentialDiagnosis2',
    3: 'differentialDiagnosis3'
  };

  notExcludedOptions: string[] = [
    LungInterstitiumDiagnosisTypeEnum.ILDKnownOrigin,
    LungInterstitiumDiagnosisTypeEnum.IdiopathicInterstitialPneumopathy,
    LungInterstitiumDiagnosisTypeEnum.ILDGranulomatous,
    LungInterstitiumDiagnosisTypeEnum.ILDOtherTypes
  ];

  constructor(private translate: TranslateService, private validationHelperService: ValidationHelperService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungInterstitium.W026.options').subscribe((out: DropdownGroupedModel[]) => {
        this.diagnosisDropDownList = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungInterstitium.W030.options').subscribe((out: DropdownModel[]) => {
        this.causeDropdownList = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translate.stream('thoraxCT.lungInterstitium.W031.options').subscribe((out: DropdownGroupedModel[]) => {
        this.classificationDropDownList = Object.keys(out).map(e => out[e]);
      })
    );
  }

  noDetails(key: number): boolean {
    return ![
      this.lungInterstitiumDiagnosisTypeEnum.None,
      this.lungInterstitiumDiagnosisTypeEnum.ILDKnownOrigin,
      this.lungInterstitiumDiagnosisTypeEnum.IdiopathicInterstitialPneumopathy,
      this.lungInterstitiumDiagnosisTypeEnum.ILDGranulomatous,
      this.lungInterstitiumDiagnosisTypeEnum.ILDOtherTypes,
      this.lungInterstitiumDiagnosisTypeEnum.Bronchiolitis
    ].includes(this.getDiagnosisName(key));
  }

  getExcludedCauseValues(key: number): string[] {
    switch (key) {
      case 2:
        return [this.model.causeType1];
      case 3:
        return [this.model.causeType1, this.model.causeType2];
      default:
        return null;
    }
  }

  getDiagnosisName(keyNumber: number): LungInterstitiumDiagnosisTypeEnum {
    if (keyNumber === 1) {
      return this.model.differentialDiagnosis !== this.lungInterstitiumDiagnosisTypeEnum.None
        ? this.model.differentialDiagnosis
        : this.model.differentialDiagnosis1;
    }
    return this.model[this.diagnosisDictionary[keyNumber]];
  }

  getCauseType(key: number): string {
    switch (key) {
      case 1:
        return nameof<LungInterstitiumUiModel>(m => m.causeType1);
      case 2:
        return nameof<LungInterstitiumUiModel>(m => m.causeType2);
      case 3:
        return nameof<LungInterstitiumUiModel>(m => m.causeType3);
    }
  }

  getIIPHRCTPatternType(key: number): string {
    switch (key) {
      case 1:
        return nameof<LungInterstitiumUiModel>(m => m.iiphrctPatternType1);
      case 2:
        return nameof<LungInterstitiumUiModel>(m => m.iiphrctPatternType2);
      case 3:
        return nameof<LungInterstitiumUiModel>(m => m.iiphrctPatternType3);
    }
  }

  getDifferentialDiagnosisDetailsType(key: number): string {
    switch (key) {
      case 1:
        return nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosisDetailsType1);
      case 2:
        return nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosisDetailsType2);
      case 3:
        return nameof<LungInterstitiumUiModel>(m => m.differentialDiagnosisDetailsType3);
    }
  }

  getSarcoidosisType(key: number): string {
    switch (key) {
      case 1:
        return nameof<LungInterstitiumUiModel>(m => m.sarcoidosisType1);
      case 2:
        return nameof<LungInterstitiumUiModel>(m => m.sarcoidosisType2);
      case 3:
        return nameof<LungInterstitiumUiModel>(m => m.sarcoidosisType3);
    }
  }

  clearSarcoidosisType(key: number) {
    switch (key) {
      case 1:
        this.model.sarcoidosisType1 = this.sarcoidosisTypeEnum.None;
        break;
      case 2:
        this.model.sarcoidosisType2 = this.sarcoidosisTypeEnum.None;
        break;
      case 3:
        this.model.sarcoidosisType3 = this.sarcoidosisTypeEnum.None;
        break;
    }
  }

  getClassificationType(key: number): string {
    switch (key) {
      case 1:
        return nameof<LungInterstitiumUiModel>(m => m.classificationType1);
      case 2:
        return nameof<LungInterstitiumUiModel>(m => m.classificationType2);
      case 3:
        return nameof<LungInterstitiumUiModel>(m => m.classificationType3);
    }
  }

  clearDifferentialDiagnosis01() {
    this.clearDifferentialDiagnosisDetails(1);
    this.model.isSuspected = false;
    this.clearDifferentialDiagnosis02();
  }

  clearDifferentialDiagnosis02() {
    this.clearDifferentialDiagnosisDetails(2);
    this.model.isSubordinated = false;
    this.clearDifferentialDiagnosis03();
  }

  clearDifferentialDiagnosis03() {
    this.clearDifferentialDiagnosisDetails(3);
  }

  clearDifferentialDiagnosisDetails(diagnosisKey: number) {
    this.model[this.getCauseType(diagnosisKey)] = this.causeTypeEnum.None;
    this.validationHelperService.removeError(this.getCauseType(diagnosisKey));
    this.model[this.getIIPHRCTPatternType(diagnosisKey)] = this.iiphrctPatternTypeEnum.None;
    this.model[this.getClassificationType(diagnosisKey)] = this.classificationTypeEnum.None;
    this.model[this.getDifferentialDiagnosisDetailsType(diagnosisKey)] = this.differentialDiagnosisDetailsTypeEnum.None;
    this.model[this.getSarcoidosisType(diagnosisKey)] = this.sarcoidosisTypeEnum.None;
    if (this.getDiagnosisName(diagnosisKey) === this.lungInterstitiumDiagnosisTypeEnum.Bronchiolitis) {
      this.model.isBronchiolitisObliterans = false;
    }
  }

  clearNextDiagnosisDetails(key: number) {
    switch (key) {
      case 1:
        this.clearDifferentialDiagnosisDetails(2);
        this.clearDifferentialDiagnosisDetails(3);
        break;
      case 2:
        this.clearDifferentialDiagnosisDetails(3);
        break;
    }
  }

  getExcludedDetailsOptions(key: number): string[] {
    switch (key) {
      case 2:
        return [this.model.causeType1];
      case 3:
        return [this.model.causeType1, this.model.causeType2];
      default:
        return [];
    }
  }

  clearNextClassification(key: number) {
    switch (key) {
      case 1:
        this.clearDifferentialDiagnosisDetails(2);
        this.clearDifferentialDiagnosisDetails(3);
        break;
      case 2:
        this.clearDifferentialDiagnosisDetails(3);
        break;
    }
  }

  getExcludedClassifications(key: number): string[] {
    switch (key) {
      case 2:
        return [this.model.classificationType1];
      case 3:
        return [this.model.classificationType1, this.model.classificationType2];
      default:
        return [];
    }
  }
}
