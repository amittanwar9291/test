import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Observable, Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';

import { AppConfig } from 'app/app.config';
import {
  FukuokaCriteriaTypeEnum,
  FukuokaNegativeCystSizeTypeEnum,
  MassDifferentialDiagnosisTypeEnum
} from '@enums/abdomenMRT/pancreas/mass';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: PancreasFindingUiModel;
  @Input() mainMassOptions1: DropdownModel[];
  @Input() mainMassOptions2: DropdownModel[];
  @Input() firstPageEvents: Observable<void>;
  @Input() isCMReinforced: boolean;

  @ViewChild(ReferencePictureComponent) referencePicture: ReferencePictureComponent;

  subscriptions: Subscription[] = [];
  fukuokaNegativeCystSizeOptions: DropdownModel[];

  descriptionType = DescriptionTypeEnum;
  mainMassDifferentialDiagnosis = MassDifferentialDiagnosisTypeEnum;
  fukuokaCriteriaType = FukuokaCriteriaTypeEnum;
  fukuokaNegativeCystSizeType = FukuokaNegativeCystSizeTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.subscriptions.push(this.firstPageEvents.subscribe(() => this.resetReferencePicture()));
    this.initTranslations();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.pancreas.fileUpload;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.pancreas.fukuokaNegativeCystSizeOptions.options').subscribe((out: DropdownModel[]) => {
        this.fukuokaNegativeCystSizeOptions = Object.values(out);
      })
    );
  }

  resetFukuokaCriteriaDependentModel(): void {
    this.model.isFollowUpInOneTwoYears = false;
    this.model.isObstructiveCholestasisWithCysticLesion = false;
    this.model.isDilatationOfThePancreaticDuct = false;
    this.model.isHighRiskContrastEnhancingmuralNodule = false;
    this.model.isDiscussionSurgicalIndication = false;
    this.model.isClinicalPancreatitis = false;
    this.model.isDiameterCysticLesionOver3cm = false;
    this.model.isGrowthAboveFiveMmInTwoYears = false;
    this.model.isContrastEnhancingMuralNodules = false;
    this.model.isThickenedWall = false;
    this.model.isContrastEnhancement = false;
    this.model.isPancreaticDuctFiveToNineMm = false;
    this.model.isAbruptChangeInPancreatic = false;
    this.model.isCAIsIncreased = false;
    this.model.isLymphNodes = false;
    this.model.isDiscussionEndosonography = false;
    this.model.fukuokaNegativeCystSizeType = FukuokaNegativeCystSizeTypeEnum.None;

    this.resetFukuokaNegativeCystDependentModel();
  }

  resetFukuokaNegativeCystDependentModel(): void {
    this.model.isCTMRIIn6MonthsThen = false;
    this.model.isCTMRIIn6MonthsThereafter = false;
    this.model.isEndosonography = false;
    this.model.isMRIWithEndosonography = false;
  }

  isHighRiskStigmataGroupDisabled(): boolean {
    const relevantCheckboxes = [
      this.model.isClinicalPancreatitis,
      this.model.isDiameterCysticLesionOver3cm,
      this.model.isGrowthAboveFiveMmInTwoYears,
      this.model.isContrastEnhancingMuralNodules,
      this.model.isThickenedWall,
      this.model.isPancreaticDuctFiveToNineMm,
      this.model.isAbruptChangeInPancreatic,
      this.model.isCAIsIncreased,
      this.model.isLymphNodes,
      this.model.isDiscussionEndosonography
    ];

    const isAtLeastOneSelected = relevantCheckboxes.filter(item => item).length > 0;

    return isAtLeastOneSelected || this.model.fukuokaNegativeCystSizeType !== FukuokaNegativeCystSizeTypeEnum.None;
  }

  isWorrisomeFeaturesGroupDisabled(): boolean {
    const relevantCheckboxes = [
      this.model.isObstructiveCholestasisWithCysticLesion,
      this.model.isDilatationOfThePancreaticDuct,
      this.model.isHighRiskContrastEnhancingmuralNodule,
      this.model.isDiscussionSurgicalIndication
    ];

    const isAtLeastOneSelected = relevantCheckboxes.filter(item => item).length > 0;

    return isAtLeastOneSelected || this.model.fukuokaNegativeCystSizeType !== FukuokaNegativeCystSizeTypeEnum.None;
  }

  isFukuokaNegativeCystSizeDisabled(): boolean {
    const relevantModel = [
      this.model.isObstructiveCholestasisWithCysticLesion,
      this.model.isDilatationOfThePancreaticDuct,
      this.model.isHighRiskContrastEnhancingmuralNodule,
      this.model.isDiscussionSurgicalIndication,
      this.model.isClinicalPancreatitis,
      this.model.isDiameterCysticLesionOver3cm,
      this.model.isGrowthAboveFiveMmInTwoYears,
      this.model.isContrastEnhancingMuralNodules,
      this.model.isThickenedWall,
      this.model.isPancreaticDuctFiveToNineMm,
      this.model.isAbruptChangeInPancreatic,
      this.model.isCAIsIncreased,
      this.model.isLymphNodes,
      this.model.isDiscussionEndosonography
    ];

    const isAtLeastOneSelected = relevantModel.filter(item => item).length > 0;
    if (isAtLeastOneSelected) {
      this.model.fukuokaNegativeCystSizeType = FukuokaNegativeCystSizeTypeEnum.None;
    }
    return isAtLeastOneSelected;
  }

  isReferencePictureDisabled(): boolean {
    const relevantModel = [
      this.model.isUncinateProcess,
      this.model.isPancreaticHead,
      this.model.isPancreaticCorpus,
      this.model.isPancreaticTail,
      this.model.isPancreaticDuct
    ];

    return relevantModel.filter(item => item).length !== 1;
  }

  showDoubleFukuokaCriteriaCol(): boolean {
    return (
      this.showFukuokaCriteriaContent() &&
      (this.model.fukuokaCriteriaType === FukuokaCriteriaTypeEnum.None ||
        this.model.fukuokaCriteriaType === FukuokaCriteriaTypeEnum.BelowFiveMm)
    );
  }

  showSingleFukuokaCriteriaCol(): boolean {
    return this.showFukuokaCriteriaContent() && this.model.fukuokaCriteriaType === FukuokaCriteriaTypeEnum.AboveFiveMm;
  }

  showFukuokaCriteriaContent(): boolean {
    const differentialDiagnosisModels = [
      this.model.mainMassDifferentialDiagnosisType1,
      this.model.massDifferentialDiagnosisType1,
      this.model.massDifferentialDiagnosisType2,
      this.model.massDifferentialDiagnosisType3
    ];

    const allowedValues = [
      MassDifferentialDiagnosisTypeEnum.IntraductalPapillaryMucinousNeoplasia,
      MassDifferentialDiagnosisTypeEnum.BranchDuctIPMN,
      MassDifferentialDiagnosisTypeEnum.MainDuctIPMN,
      MassDifferentialDiagnosisTypeEnum.MixedTypeIPMN,
      MassDifferentialDiagnosisTypeEnum.MucinousCysticNeoplasia
    ];

    const isAtLeastOneDDOfAllowedValue = differentialDiagnosisModels.some(item => allowedValues.includes(item));
    if (!isAtLeastOneDDOfAllowedValue) {
      this.model.fukuokaCriteriaType = FukuokaCriteriaTypeEnum.None;
      this.resetFukuokaCriteriaDependentModel();
    }

    return isAtLeastOneDDOfAllowedValue;
  }

  resetReferencePicture(): void {
    this.referencePicture?.resetReferencePicture();
  }

  clearDD1Dependent(): void {
    this.model.isSuspicionOf = false;
    this.clearDD2Dependent();
  }

  clearDD2Dependent(): void {
    this.model.isSubordinate = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
