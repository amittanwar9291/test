import { Component, OnInit, OnDestroy } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { ProstateUiModel } from '@models/pelvisMRT/ui/prostate/prostate-ui.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { ControlContainer, NgForm } from '@angular/forms';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AnamnesisUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-ui.model';
import { ProstateValidationModel } from '@models/pelvisMRT/ui/prostate/prostate-validation.model';
import { ThreeCrossSection } from '@models/pelvisMRT/ui/localizers/three-cross-section';
import { forOwn } from 'lodash';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ProstataFindingTypeEnum } from '@enums/pelvisMRT/prostate/prostata-finding-type.enum';
import { ProstataTranslationsModel } from '@models/pelvisMRT/ui/prostate/prostata-translations.model';
import { IndexLesionTypeEnum } from '@enums/pelvisMRT/prostate/index-lesion-type.enum';
import { ProstateHelperService } from './prostate-helper.service';
import { SummaryUiModel } from '@models/pelvisMRT/ui/summary/summary-ui.model';
import { TnStagingTypeEnum } from '@enums/pelvisMRT/summary/tn-staging-type.enum';
import { TStageTypeEnum } from '@enums/pelvisMRT/summary/t-stage-type.enum';
import { NStageTypeEnum } from '@enums/pelvisMRT/summary/n-stage-type.enum';
import { MStageTypeEnum } from '@enums/pelvisMRT/summary/m-stage-type.enum';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { nameof } from 'ts-simple-nameof';
import { DynamicContrastEnhancedTypeEnum } from '@enums/pelvisMRT/prostate/dynamic-contrast-enhanced-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/prostate/differential-diagnosis-type.enum';

@Component({
  selector: 'rr-prostate',
  templateUrl: './prostate.component.html',
  styleUrls: ['./prostate.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ProstateComponent extends SlideBaseComponent<ProstateUiModel> implements OnInit, OnDestroy {
  findingHandler: DynamicComponentHandler<ProstateFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  anamnesisModel: AnamnesisUiModel;
  technologyModel: TechnologyUiModel;

  w026DifferentialDiagnosisType: DropdownModel[];

  areFindings = AreFindingsEnum;
  findingType = ProstataFindingTypeEnum;
  tStageType = TStageTypeEnum;
  nStageType = NStageTypeEnum;
  mStageType = MStageTypeEnum;
  simpleAnswerType = SimpleAnswerEnum;

  isPatientInformation = true;
  largeLocaliserOpen = false;
  localiserZone = '';
  validationGroup =
    'areFindings ' +
    'findings ' +
    'dynamicContrastEnhancedType ' +
    'extraprostaticGrowthType ' +
    'piradsScoreSizeType ' +
    'centralZoneCZLocalizerType ' +
    'peripheralZonePZLocalizerType ' +
    'transitionaZoneTZLocalizerType ' +
    'indexLesionType ' +
    'localizationT1wSignalEnhancementType ' +
    'ejaculatoryDuctDirectionType ' +
    'differentialDiagnosis01';

  isAllFindings = false;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private prostateHelperService: ProstateHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, ProstateUiModel, commonServices, ProstateValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, ProstateFindingUiModel);

    this.registerPagesConnections();
    this.registerCallbacks();
    this.findingsConfiguration();

    this.checkIfFinding();
  }

  ngOnInit() {
    super.ngOnInit();
    this.subscriptions.push(
      this.prostateHelperService.sliderPiradasScoreTypeChanged.subscribe(value => {
        if (value) {
          this.onSliderPiradasScoreTypeChanged();
        }
      }),
      this.prostateHelperService.indexLesionTypeChanged.subscribe(value => {
        if (value) {
          this.onIndexLesionTypeChanged();
        }
      })
    );
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.prostateHelperService.sliderPiradasScoreTypeChanged.next(null);
    this.prostateHelperService.indexLesionTypeChanged.next(null);
  }

  private onSliderPiradasScoreTypeChanged() {
    if (this.findingHandler.currentItem.indexLesionType === IndexLesionTypeEnum.Yes) {
      this.changePiradsScoreTotalInFindings(this.findingHandler.currentItem.sliderPiradasScoreType);
    }
  }

  private onIndexLesionTypeChanged() {
    if (this.findingHandler.currentItem.indexLesionType === IndexLesionTypeEnum.Yes) {
      this.changeIndexLesionTypeInPreviousYesFinding();
      this.changePiradsScoreTotalInFindings(this.findingHandler.currentItem.sliderPiradasScoreType);
    } else {
      if (this.isPiradsScoreTotalResetNeeded()) {
        this.changePiradsScoreTotalInFindings(null);
      }
    }
  }

  private changePiradsScoreTotalInFindings(score: number) {
    this.findingHandler.collection
      .filter(finding => [ProstataFindingTypeEnum.TransitionZoneTZ, ProstataFindingTypeEnum.PeripheralZonePZ].includes(finding.findingType))
      .forEach(finding => this.setPiradsScoreTotalAndClearDiagnoses(finding, score));
  }

  private setPiradsScoreTotalAndClearDiagnoses(finding: ProstateFindingUiModel, score: number) {
    finding.piradsScoreTotal = score;
    finding.differentialDiagnosis01 = DifferentialDiagnosisTypeEnum.None;
    finding.isSuspicionOf01 = false;
    finding.differentialDiagnosis02 = DifferentialDiagnosisTypeEnum.None;
    finding.isSuspicionOf02 = false;
    finding.isDifferentialDiagnosis01GranulomatousProstatitis = false;
    finding.isDifferentialDiagnosis02GranulomatousProstatitis = false;
    this.validationHelperService.removeError(
      nameof<ProstateFindingUiModel>(f => f.differentialDiagnosis01),
      finding.validationId
    );
  }

  private changeIndexLesionTypeInPreviousYesFinding() {
    const previousIndexLesionYesFinding = this.findingHandler.collection.find(
      finding =>
        finding.indexLesionType === IndexLesionTypeEnum.Yes && finding.id !== this.findingHandler.currentItem.id && !finding.isDeleted
    );

    if (previousIndexLesionYesFinding) {
      previousIndexLesionYesFinding.indexLesionType = IndexLesionTypeEnum.No;
    }
  }

  private isPiradsScoreTotalResetNeeded(): boolean {
    const indexLesionTypeYesFinding = this.getIndexLesionTypeYesFinding();
    const anyFindingWithPiradsScoreTotalSet = this.findingHandler.collection.find(
      finding => finding.piradsScoreTotal && !finding.isDeleted
    );

    return !!(!indexLesionTypeYesFinding && anyFindingWithPiradsScoreTotalSet);
  }

  private getIndexLesionTypeYesFinding(): ProstateFindingUiModel {
    return this.findingHandler.collection.find(finding => finding.indexLesionType === IndexLesionTypeEnum.Yes && !finding.isDeleted);
  }

  onFindingTypeChange() {
    this.setValidationForFindingButton();

    if (this.isPiradsScoreTotalResetNeeded()) {
      this.changePiradsScoreTotalInFindings(null);
    } else {
      if (
        [ProstataFindingTypeEnum.TransitionZoneTZ, ProstataFindingTypeEnum.PeripheralZonePZ].includes(
          this.findingHandler.currentItem.findingType
        )
      ) {
        const indexLesionTypeYesFinding = this.getIndexLesionTypeYesFinding();
        if (indexLesionTypeYesFinding) {
          this.findingHandler.currentItem.piradsScoreTotal = indexLesionTypeYesFinding.sliderPiradasScoreType;
        }
      }
    }
  }

  onFindingRemoved() {
    if (this.isPiradsScoreTotalResetNeeded()) {
      this.changePiradsScoreTotalInFindings(null);
    }
  }

  private registerPagesConnections() {
    this.registerConnectionCallback(2, AnamnesisUiModel, (anamnesisModel: AnamnesisUiModel) => {
      this.anamnesisModel = anamnesisModel;
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.technologyModel = technologyModel;
      this.updateValidationModel(this.isTechnologyCmReinforcedType());
    });

    this.addPageConnection(
      12,
      SummaryUiModel,
      () => true,
      (model: SummaryUiModel) => {
        const anyTZOrPZFinding = this.findingHandler.collection.find(
          finding =>
            [ProstataFindingTypeEnum.TransitionZoneTZ, ProstataFindingTypeEnum.PeripheralZonePZ].includes(finding.findingType) &&
            !finding.isDeleted
        );

        model.piradsScoreTotal = anyTZOrPZFinding ? anyTZOrPZFinding.piradsScoreTotal : null;
        if (anyTZOrPZFinding?.piradsScoreTotal <= 3 && model.tnStagingType === TnStagingTypeEnum.ProstateCarcinoma) {
          model.tnStagingType = TnStagingTypeEnum.None;
          model.prostateCarcinomaTStageType = this.tStageType.None;
          model.prostateCarcinomaNStageType = this.nStageType.None;
          model.prostateCarcinomaMStageType = this.mStageType.None;
        }
      }
    );
  }

  openLargeLocalizer(zone: string): void {
    this.localiserZone = zone;
    this.largeLocaliserOpen = true;
  }

  closeLargeLocalizer(zoneName: string): void {
    this.largeLocaliserOpen = false;
    const variableName = {
      Peripheral: 'peripheralZonePZLocalizerType',
      Transitional: 'transitionaZoneTZLocalizerType',
      Central: 'centralZoneCZLocalizerType'
    };
    const elementName = variableName[zoneName] ? variableName[zoneName] : 'localizationT1wSignalEnhancementType';

    forOwn(this.findingHandler.currentItem[elementName], value => {
      if (value === true) {
        this.validationHelperService.removeError(elementName);
      }
    });
  }

  registerCallbacks() {
    this.registerGetCallback((model: ProstateUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((model: ProstateUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 6;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'pel_m_040124';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'pel_m_040123';
    this.findingDropdownConfig.translationBits = new ProstataTranslationsModel();
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== this.areFindings.Yes && !this.isPatientInformation;
  }

  getThreeLocalizerModel() {
    let localizerModel: ThreeCrossSection;

    if (this.localiserZone === 'Prepheral') {
      localizerModel = this.findingHandler.currentItem.peripheralZonePZLocalizerType;
    } else if (this.localiserZone === 'Transitional') {
      localizerModel = this.findingHandler.currentItem.transitionaZoneTZLocalizerType;
    }
    return localizerModel;
  }

  getCustomLabel(
    index: number,
    prostataHandler: DynamicComponentHandler<ProstateFindingUiModel>,
    translationBits: ProstataTranslationsModel
  ): string {
    let result = '';
    const { indexLesionType, findingType } = prostataHandler.collection[index];
    const prostataFindingType = ProstataFindingTypeEnum;
    const prostatIndexLesionType = IndexLesionTypeEnum;
    if (prostataHandler) {
      switch (findingType) {
        case prostataFindingType.TransitionZoneTZ:
          if (indexLesionType === prostatIndexLesionType.Yes) {
            result += translationBits.transitionZoneTZIndexLesion;
          }
          result += translationBits.transitionZoneTZ;
          break;
        case prostataFindingType.PeripheralZonePZ:
          if (indexLesionType === prostatIndexLesionType.Yes) {
            result += translationBits.transitionZonePZIndexLesion;
          }
          result += translationBits.peripheralZonePZ;
          break;
        case prostataFindingType.CentralZoneCZ:
          result += translationBits.centralZoneCZ;
          break;
      }
    }
    return result;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.prostata.findingTypes.options').subscribe((out: DropdownModel[]) => {
        console.log(out);
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('pelvisMRT.prostata.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('pelvisMRT.prostata.w026DifferentialDiagnosisType.options').subscribe((out: DropdownModel[]) => {
        this.w026DifferentialDiagnosisType = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.prostata.translationBits').subscribe((out: any) => {
        Object.assign(this.findingDropdownConfig.translationBits, out);
      })
    );
  }

  resetErrorValidation() {
    this.isAllFindings = false;
    this.findingHandler.collection.forEach(item => {
      this.validationHelperService.removeAllErrorsInFinding(item.validationId);
    });
  }

  checkIfFinding() {
    return this.findingHandler.currentItem.findingType === this.findingType.None || this.model.areFindings === this.areFindings.No;
  }

  setValidationForFindingButton() {
    this.isAllFindings = true;
    this.validationHelperService.removeError('findings');
  }

  private updateValidationModel(isTechnologyCmReinforcedType: boolean): void {
    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<ProstateFindingUiModel>(m => m.dynamicContrastEnhancedType),
        validateCondition: {
          customConditionFunction: isTechnologyCmReinforcedType
            ? (m: ProstateFindingUiModel) => this.dynamicContrastEnhancedCustomValidation(m)
            : () => true
        }
      },
      ProstataFindingTypeEnum.TransitionZoneTZ
    );

    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<ProstateFindingUiModel>(m => m.dynamicContrastEnhancedType),
        validateCondition: {
          customConditionFunction: isTechnologyCmReinforcedType
            ? (m: ProstateFindingUiModel) => this.dynamicContrastEnhancedCustomValidation(m)
            : () => true
        }
      },
      ProstataFindingTypeEnum.PeripheralZonePZ
    );

    this.validationHelperService.updateElementInValidationModel(
      {
        modelName: nameof<ProstateFindingUiModel>(m => m.dynamicContrastEnhancedType),
        validateCondition: {
          customConditionFunction: isTechnologyCmReinforcedType
            ? (m: ProstateFindingUiModel) => this.dynamicContrastEnhancedCustomValidation(m)
            : () => true
        }
      },
      ProstataFindingTypeEnum.CentralZoneCZ
    );
  }

  isTechnologyCmReinforcedType(): boolean {
    return this.technologyModel.cmReinforcedType !== this.simpleAnswerType.Yes;
  }

  dynamicContrastEnhancedCustomValidation(model: ProstateFindingUiModel): boolean {
    return (
      model.dynamicContrastEnhancedType === DynamicContrastEnhancedTypeEnum.DceMrtPositive ||
      model.dynamicContrastEnhancedType === DynamicContrastEnhancedTypeEnum.DceMrtNegative
    );
  }
}
