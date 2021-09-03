import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { FigoClassification } from '@models/pelvisMRT/ui/localizers/figo-classification';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs';
import { FemaleSexHelperService } from '../../female-sex-helper.service';
import { TranslateService } from '@ngx-translate/core';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LocalizationOfMassTypeEnum } from '@enums/pelvisMRT/female-sex/localization-of-mass-type.enum';
import { DegenerationTypeEnum } from '@enums/pelvisMRT/female-sex/corpus-uteri-mass/degeneration-type.enum';
import { FigoStageTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-type.enum';
import { FigoStageDetailsTypeEnum } from '@enums/pelvisMRT/female-sex/figo-stage-details-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FemaleGenderDiagnosisTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-diagnosis-type.enum';

@Component({
  selector: 'rr-corpus-uteri-mass-characterization-one',
  templateUrl: './corpus-uteri-mass-characterization-one.component.html',
  styleUrls: ['./corpus-uteri-mass-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CorpusUteriMassCharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: FemaleSexFindingUiModel;

  firstCorpusUteriMassFindingValidationId: string;

  w048corpusUteriDifferentialDiagnosis01: DropdownGroupedModel[];
  leiomyomaOptionsW050: DropdownModel[];

  subscriptions: Subscription[] = [];

  descriptionTypeEnum = DescriptionTypeEnum;
  localizationOfMassTypeEnum = LocalizationOfMassTypeEnum;
  femaleGenderDiagnosisTypeEnum = FemaleGenderDiagnosisTypeEnum;

  constructor(private femaleSexHelperService: FemaleSexHelperService, private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.femaleSexHelperService.firstCorpusUteriMassFindingValidationId.subscribe((value: string) => {
        this.firstCorpusUteriMassFindingValidationId = value;
      }),
      this.translate
        .stream('pelvisMRT.femaleGender.w048corpusUteriDifferentialDiagnosis01.options')
        .subscribe((out: DropdownGroupedModel[]) => (this.w048corpusUteriDifferentialDiagnosis01 = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.leiomyomaW050.options')
        .subscribe((out: DropdownModel[]) => (this.leiomyomaOptionsW050 = out))
    );
  }

  isAddidtionalCorpusUteriMassFinding(): boolean {
    return this.firstCorpusUteriMassFindingValidationId !== this.model.validationId;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  openUterusLocalizer() {
    this.femaleSexHelperService.isUterusLargeLocalizerOpen.next(true);
  }

  onSizeUterusAxialInMmChange() {
    this.model.secondPlaneOrthogonalInMm = null;
    this.model.craniocaudalInMm = null;
  }

  onSecondPlaneOrthogonalInMmChange() {
    this.model.craniocaudalInMm = null;
  }

  clearDifferentialDiagnosisDependentFields(): void {
    this.model.isSubordinate = false;
    this.model.figoClassificationLocation2 = new FigoClassification();
    this.model.degenerationType2 = DegenerationTypeEnum.None;
    this.model.isTorsion2 = false;
    this.model.figoStageType2 = FigoStageTypeEnum.None;
    this.model.figoStageDetailsType2 = FigoStageDetailsTypeEnum.None;
    this.model.figoStageAdditionalDetailsType2 = FigoStageDetailsTypeEnum.None;
  }
}
