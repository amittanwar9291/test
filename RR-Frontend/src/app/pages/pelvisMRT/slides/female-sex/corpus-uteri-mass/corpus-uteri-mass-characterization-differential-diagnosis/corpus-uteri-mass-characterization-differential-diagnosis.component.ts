import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FigoClassification } from '@models/pelvisMRT/ui/localizers/figo-classification';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { TranslateService } from '@ngx-translate/core';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';
import { nameof } from 'ts-simple-nameof';
import { FigoStageTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-type.enum';
import { FigoStageDetailsTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-details-type.enum';
import { DegenerationTypeEnum } from '@enums/pelvisMRT/female-sex/corpus-uteri-mass/degeneration-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { HttpParams } from '@angular/common/http';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { FemaleSexPresetUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-preset-ui.model';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { omit } from 'lodash';

@Component({
  selector: 'rr-corpus-uteri-mass-characterization-differential-diagnosis',
  templateUrl: './corpus-uteri-mass-characterization-differential-diagnosis.component.html',
  styleUrls: ['./corpus-uteri-mass-characterization-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CorpusUteriMassCharacterizationDifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  descriptionTypeEnum = DescriptionTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;
  figoStageTypeEnum = FigoStageTypeEnum;
  figoStageDetailsTypeEnum = FigoStageDetailsTypeEnum;

  w048corpusUteriDifferentialDiagnosis01: DropdownGroupedModel[];
  w049corpusUteriDifferentialDiagnosis02: DropdownGroupedModel[];
  leiomyomaOptionsW050: DropdownModel[];
  stageIDetailsOptionsW051: DropdownModel[];
  stageIIIDetailsOptionsW052: DropdownModel[];
  stageIIIDetailsOptionsW054: DropdownModel[];
  stageIVDetailsOptionsW053: DropdownModel[];

  subscriptions: Subscription[] = [];
  isCM: boolean;
  isDWI: boolean;

  constructor(
    private femaleSexHelperService: FemaleSexHelperService,
    private translate: TranslateService,
    private validationHelperService: ValidationHelperService,
    private navigationReportDataService: NavigationReportDataService,
    private presetService: DifferentialDiagnosisPresetService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.femaleSexHelperService.isCM.subscribe(value => (this.isCM = value)),
      this.femaleSexHelperService.isDWI.subscribe(value => (this.isDWI = value)),
      this.translate
        .stream('pelvisMRT.femaleGender.w048corpusUteriDifferentialDiagnosis01.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w048corpusUteriDifferentialDiagnosis01 = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.w049corpusUteriDifferentialDiagnosis02.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w049corpusUteriDifferentialDiagnosis02 = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.leiomyomaW050.options')
        .subscribe((out: DropdownModel[]) => (this.leiomyomaOptionsW050 = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.stageIDetailsW051.options')
        .subscribe((out: DropdownModel[]) => (this.stageIDetailsOptionsW051 = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.stageIIIDetailsW052.options')
        .subscribe((out: DropdownModel[]) => (this.stageIIIDetailsOptionsW052 = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.stageIIIDetailsW054.options')
        .subscribe((out: DropdownModel[]) => (this.stageIIIDetailsOptionsW054 = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.stageIVDetailsW053.options')
        .subscribe((out: DropdownModel[]) => (this.stageIVDetailsOptionsW053 = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  showAdditionalDiagnosisCol1Header() {
    return (
      [FemaleGenderDiagnosisTypeEnum.Leiomyoma, FemaleGenderDiagnosisTypeEnum.EndometrialCarcinoma].includes(
        this.model.differentialDiagnosis
      ) ||
      [FemaleGenderDiagnosisTypeEnum.Leiomyoma, FemaleGenderDiagnosisTypeEnum.EndometrialCarcinoma].includes(
        this.model.differentialDiagnosis1
      )
    );
  }

  showAdditionalDiagnosisCol2Header() {
    return [FemaleGenderDiagnosisTypeEnum.Leiomyoma, FemaleGenderDiagnosisTypeEnum.EndometrialCarcinoma].includes(
      this.model.differentialDiagnosis2
    );
  }

  openlargeLocalizer(diagnosisNumber: number) {
    const propName =
      diagnosisNumber === 1
        ? nameof<FemaleSexFindingUiModel>(m => m.figoClassificationLocation1)
        : nameof<FemaleSexFindingUiModel>(m => m.figoClassificationLocation2);
    this.femaleSexHelperService.isUterusFIGOLocalizerOpen.next(propName);
  }

  clearDifferentialDiagnosis01DDependentFileds() {
    this.model.figoClassificationLocation1 = new FigoClassification();
    this.model.degenerationType1 = DegenerationTypeEnum.None;
    this.model.isTorsion1 = false;
    this.model.figoStageType1 = FigoStageTypeEnum.None;
    this.model.figoStageDetailsType1 = FigoStageDetailsTypeEnum.None;
    this.model.figoStageAdditionalDetailsType1 = FigoStageDetailsTypeEnum.None;
    this.clearDifferentialDiagnosis01DDependentFiledsErrors();
    this.clearDifferentialDiagnosis02DependentFields();
  }

  clearDifferentialDiagnosis02DependentFields() {
    this.model.isSubordinate = false;
    this.model.figoClassificationLocation2 = new FigoClassification();
    this.model.degenerationType2 = DegenerationTypeEnum.None;
    this.model.isTorsion2 = false;
    this.model.figoStageType2 = FigoStageTypeEnum.None;
    this.model.figoStageDetailsType2 = FigoStageDetailsTypeEnum.None;
    this.model.figoStageAdditionalDetailsType2 = FigoStageDetailsTypeEnum.None;
    this.clearDifferentialDiagnosis02DependentFieldsErrors();
  }

  clearFigoStageAdditionalDetailsType1() {
    if (this.model.figoStageDetailsType1 !== FigoStageDetailsTypeEnum.IIIC) {
      this.model.figoStageAdditionalDetailsType1 = FigoStageDetailsTypeEnum.None;
    }
  }
  clearFigoStageAdditionalDetailsType2() {
    if (this.model.figoStageDetailsType2 !== FigoStageDetailsTypeEnum.IIIC) {
      this.model.figoStageAdditionalDetailsType2 = FigoStageDetailsTypeEnum.None;
    }
  }

  clearDifferentialDiagnosis01DDependentFiledsErrors() {
    this.validationHelperService.removeError(nameof<FemaleSexFindingUiModel>(m => m.figoStageType1));
    this.validationHelperService.removeError(nameof<FemaleSexFindingUiModel>(m => m.is1BMacroinvasiveLesion1));
    this.validationHelperService.removeError(nameof<FemaleSexFindingUiModel>(m => m.figoStageAdditionalDetailsType1));
    this.validationHelperService.removeError(nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType1));
  }

  clearDifferentialDiagnosis02DependentFieldsErrors() {
    this.validationHelperService.removeError(nameof<FemaleSexFindingUiModel>(m => m.figoStageType2));
    this.validationHelperService.removeError(nameof<FemaleSexFindingUiModel>(m => m.is1BMacroinvasiveLesion2));
    this.validationHelperService.removeError(nameof<FemaleSexFindingUiModel>(m => m.figoStageAdditionalDetailsType2));
    this.validationHelperService.removeError(nameof<FemaleSexFindingUiModel>(m => m.figoStageDetailsType2));
  }

  onDegenerationType1Change() {
    const httpParams = new HttpParams()
      .set('reportId', this.navigationReportDataService.getReportId())
      .set('findingType', this.model.findingType)
      .set('degenerationType1', this.model.degenerationType1);
    this.presetService.getPreset(this.model.differentialDiagnosis, httpParams).subscribe((preset: FemaleSexPresetUiModel) => {
      this.updateModel(preset);
    });
  }

  updateModel(preset: FemaleSexPresetUiModel) {
    const omittedProperties = [
      ...findingBaseProperties,
      nameof<FemaleSexPresetUiModel>(p => p.differentialDiagnosis),
      nameof<FemaleSexPresetUiModel>(p => p.degenerationType1)
    ];
    Object.assign(this.model, omit(preset, omittedProperties));
    Object.keys(preset).forEach(modelName => this.validationHelperService.removeError(modelName));
  }
}
