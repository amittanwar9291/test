import { Component, OnInit, OnDestroy } from '@angular/core';

import { FemaleSexUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-ui.model';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { FemaleSexValidationModel } from '@models/pelvisMRT/ui/female-sex/female-sex-validation.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { FemaleGenderFindingTypeEnum } from '@enums/pelvisMRT/female-sex/female-gender-finding-type.enum';
import { FemaleSexHelperService } from './female-sex-helper.service';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequenceUiModel } from '@models/pelvisMRT/ui/technology/sequence-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { nameof } from 'ts-simple-nameof';
import { IValidationModelElement } from '@models/shared/validation/form-validation.models';

@Component({
  selector: 'rr-female-sex',
  templateUrl: './female-sex.component.html',
  styleUrls: ['./female-sex.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FemaleSexComponent extends SlideBaseComponent<FemaleSexUiModel> implements OnInit, OnDestroy {
  findingHandler: DynamicComponentHandler<FemaleSexFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  activeTabIndex = 0;

  descriptionTypes = [
    FemaleGenderFindingTypeEnum.OvaryMass,
    FemaleGenderFindingTypeEnum.UterineTubeMass,
    FemaleGenderFindingTypeEnum.CorpusUteriInflammation,
    FemaleGenderFindingTypeEnum.CorpusUteriMass,
    FemaleGenderFindingTypeEnum.CervixUteriMass,
    FemaleGenderFindingTypeEnum.VaginaMass,
    FemaleGenderFindingTypeEnum.VulvaMass
  ];

  femaleGenderFindingTypeEnum = FemaleGenderFindingTypeEnum;
  areFindingsEnum = AreFindingsEnum;

  figolocalizerProp: string;
  isUterusLargeLocalizerOpen: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private femaleSexHelperService: FemaleSexHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, FemaleSexUiModel, commonServices, FemaleSexValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, FemaleSexFindingUiModel);
    this.findingsConfiguration();
    this.registerCallbacks();
  }

  registerCallbacks() {
    this.registerGetCallback((model: FemaleSexUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
      this.setFirstCorpusUteriMassFindingValidationId();
    });

    this.registerSaveCallback((model: FemaleSexUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.femaleSexHelperService.isCM.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
      this.femaleSexHelperService.isDWI.next(
        technologyModel.sequences.filter((model: SequenceUiModel) => model.weightingType === WeightingTypeEnum.DWI).length > 0
      );
    });
  }

  ngOnInit() {
    super.ngOnInit();
    this.subscriptions.push(
      this.femaleSexHelperService.isUterusFIGOLocalizerOpen.subscribe(value => (this.figolocalizerProp = value)),
      this.femaleSexHelperService.isUterusLargeLocalizerOpen.subscribe(value => (this.isUterusLargeLocalizerOpen = value))
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.femaleSexHelperService.isUterusFIGOLocalizerOpen.next(null);
    this.femaleSexHelperService.isUterusLargeLocalizerOpen.next(null);
  }

  closeFigoLocalizer() {
    this.femaleSexHelperService.isUterusFIGOLocalizerOpen.next(null);
  }

  closeUterusLocalizer() {
    this.femaleSexHelperService.isUterusLargeLocalizerOpen.next(null);
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<FemaleSexFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.autoConfigFindingRRId = 'pel_m_060106';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate
        .stream('pelvisMRT.femaleGender.findingTypes.options')
        .subscribe((out: DropdownModel[]) => (this.findingDropdownConfig.dropdownValues = out)),
      this.translate
        .stream('pelvisMRT.femaleGender.addNewFinding.value')
        .subscribe((out: string) => (this.findingDropdownConfig.buttonText = out)),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => (this.findingDropdownConfig.placeholder = out))
    );
  }

  onFindingChange() {
    this.setFirstCorpusUteriMassFindingValidationId();
  }

  setFirstCorpusUteriMassFindingValidationId() {
    const firstCorpusUteriMassFinding = this.findingHandler.collection.find(
      item => !item.isDeleted && item.findingType === FemaleGenderFindingTypeEnum.CorpusUteriMass
    );
    if (firstCorpusUteriMassFinding) {
      this.femaleSexHelperService.firstCorpusUteriMassFindingValidationId.next(firstCorpusUteriMassFinding.validationId);
      this.updateValidationModelForFirstCorpusUteriMassFinding(firstCorpusUteriMassFinding.validationId);
    } else {
      this.femaleSexHelperService.firstCorpusUteriMassFindingValidationId.next(null);
    }
  }

  private updateValidationModelForFirstCorpusUteriMassFinding(firstCorpusUteriMassFindingValidationId: string) {
    const elemValModel: IValidationModelElement = {
      modelName: nameof<FemaleSexFindingUiModel>(m => m.sizeUterusAxialInMm),
      validateCondition: {
        customConditionFunction: (m: FemaleSexFindingUiModel) => firstCorpusUteriMassFindingValidationId === m.validationId
      }
    };
    this.validationHelperService.updateElementInValidationModel(elemValModel, FemaleGenderFindingTypeEnum.CorpusUteriMass);
  }

  resetTabIndex() {
    this.femaleSexHelperService.activeTabIndex.next(0);
  }
}
