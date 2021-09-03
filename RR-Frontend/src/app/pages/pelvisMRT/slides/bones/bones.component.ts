import { Component } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';

import { BonesUiModel } from '@models/pelvisMRT/ui/bones/bones-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import { NgForm, ControlContainer } from '@angular/forms';
import { BonesValidationModel } from '@models/pelvisMRT/ui/bones/bones-validation.model';
import { BonesFindingTypeEnum } from '@enums/pelvisMRT/bones/bones-finding-type.enum';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { HipBones } from '@models/pelvisMRT/ui/localizers/hip-bones';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';

import {
  BoneWidthTypeEnum,
  LocalizationFemoralNeckTypeEnum,
  WideEdemaMeasurementCoronaryTypeEnum
} from '@enums/pelvisMRT/bones/stress-fracture';
import {
  FpfClassificationTypeEnum,
  DepressionFractureTypeEnum,
  ShearFractureAngleTypeEnum,
  ShearFractureTypeEnum,
  FemoralHeadFractureFormTypeEnum,
  TranscervicalTypeEnum,
  SubcapitalTypeEnum,
  FemoralNeckFractureFormTypeEnum,
  IntertrochantericTypeEnum,
  MultiFragmentalPertrochantericTypeEnum,
  TrochantericRuptureTypeEnum,
  SimplePertrochantericTypeEnum
} from '@enums/pelvisMRT/bones/fracture-proximal-femur';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { NotFurtherSpecifiedTypeEnum } from '@enums/pelvisMRT/bones/not-further-specified-type.enum';
import { TrochantericRegionFractureFormTypeEnum } from '@enums/pelvisMRT/bones/fracture-proximal-femur/trochanteric-region-fracture-form-type.enum';
import { nameof } from 'ts-simple-nameof';
import { compact } from 'lodash';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

@Component({
  selector: 'rr-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> {
  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  differentialDiagnosisList: DropdownModel[];
  anfhDifferentialDiagnosisOptions: DropdownModel[];
  largeLocalizerActiveElements: BonesLocalizerElementsEnum[];
  isLargeLocalizerOpened: boolean;
  technologyModel: TechnologyUiModel;
  isCMReinforcedChecked: boolean;
  isExpansionLocalizer: boolean;
  localizationFemoralNeckType = LocalizationFemoralNeckTypeEnum;
  wideEdemaMeasurementCoronaryType = WideEdemaMeasurementCoronaryTypeEnum;
  boneWidthType = BoneWidthTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);

    this.registerCallbacks();

    this.findingsConfiguration();

    this.isLargeLocalizerOpened = false;
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.technologyModel = technologyModel ? technologyModel : new TechnologyUiModel();
    });
  }

  localizerModelChange(): void {
    this.findingHandler.currentItem.localizationFemoralNeckType = this.localizationFemoralNeckType.None;
    this.findingHandler.currentItem.boneWidthType = this.boneWidthType.None;
    this.findingHandler.currentItem.wideEdemaMeasurementCoronaryType = this.wideEdemaMeasurementCoronaryType.None;
    this.findingHandler.currentItem.isHypointenseLine = false;

    this.findingHandler.currentItem.fpfClassificationType = FpfClassificationTypeEnum.None;
    this.findingHandler.currentItem.fpfClassificationType = FpfClassificationTypeEnum.None;

    this.findingHandler.currentItem.simplePertrochantericType = SimplePertrochantericTypeEnum.None;
    this.findingHandler.currentItem.trochantericRuptureType = TrochantericRuptureTypeEnum.None;
    this.findingHandler.currentItem.multiFragmentalPertrochantericType = MultiFragmentalPertrochantericTypeEnum.None;
    this.findingHandler.currentItem.intertrochantericType = IntertrochantericTypeEnum.None;
    this.findingHandler.currentItem.femoralNeckFractureFormType = FemoralNeckFractureFormTypeEnum.None;
    this.findingHandler.currentItem.subcapitalType = SubcapitalTypeEnum.None;
    this.findingHandler.currentItem.transcervicalType = TranscervicalTypeEnum.None;
    this.findingHandler.currentItem.femoralHeadFractureFormType = FemoralHeadFractureFormTypeEnum.None;
    this.findingHandler.currentItem.shearFractureType = ShearFractureTypeEnum.None;
    this.findingHandler.currentItem.shearFractureAngleType = ShearFractureAngleTypeEnum.None;
    this.findingHandler.currentItem.impressionFractureType = DepressionFractureTypeEnum.None;
    this.findingHandler.currentItem.isPseudarthrosis = false;
    this.findingHandler.currentItem.fpfNotFurtherSpecifiedType = NotFurtherSpecifiedTypeEnum.None;
    this.findingHandler.currentItem.trochantericRegionFractureFormType = TrochantericRegionFractureFormTypeEnum.None;
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'pel_m_100106';
    columnIds.iDescribeLabelRRId = 'tho_m_040111';
    columnIds.iKnowLabelRRId = 'tho_m_0401012';
    columnIds.iDescribeRadioRRId = 'tho_m_040113';
    columnIds.iKnowRadioRRId = 'tho_m_040114';
    columnIds.buttonRRId = 'pel_m_100107';
  }

  getCustomLabel(index: number, sequenceHandler: DynamicComponentHandler<BonesFindingUiModel>, translationBits): string {
    const currSelected = sequenceHandler.collection[index].findingType;
    const keys = Object.keys(translationBits);
    let key = '';
    if (sequenceHandler.collection[index].findingType) {
      key = keys.find(x => x.toUpperCase() === currSelected.toUpperCase());
    }
    return translationBits[key];
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  private clearStressFractureModel(): void {}

  openLocalizer(params: { elem: BonesLocalizerElementsEnum[]; isExpansion: boolean }): void {
    this.largeLocalizerActiveElements = params.elem;
    this.isLargeLocalizerOpened = true;
    this.isExpansionLocalizer = params.isExpansion;
  }

  closeLocalizer(): void {
    this.isLargeLocalizerOpened = false;
    if (
      !(this.findingHandler.currentItem.hipLocalizer.LeftFemoralShaft || this.findingHandler.currentItem.hipLocalizer.RightFemoralShaft) &&
      this.findingHandler.currentItem.findingType === BonesFindingTypeEnum.StressFracture
    ) {
      this.clearStressFractureModel();
    }

    this.clearLocalizersErrors();
  }

  private clearLocalizersErrors() {
    const localizerModel: HipBones = this.findingHandler.currentItem[this.getLocalizerModelProp()];
    const anySelectionMade = compact(Object.values(localizerModel)).length !== 0;

    if (anySelectionMade) {
      this.validationHelperService.removeError(this.getLocalizerModelProp());
    }
  }

  getLocalizerModelProp(): string {
    if (this.findingHandler.currentItem.findingType === BonesFindingTypeEnum.Tumor) {
      return nameof<BonesFindingUiModel>(m => m.singleSelectionTumorHipLocalizer);
    }
    if (this.findingHandler.currentItem.findingType === BonesFindingTypeEnum.BoneMarrowEdema && this.isExpansionLocalizer) {
      return nameof<BonesFindingUiModel>(m => m.expansionHipLocalizer);
    }
    return nameof<BonesFindingUiModel>(m => m.hipLocalizer);
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('pelvisMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('pelvisMRT.bones.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('pelvisMRT.bones.translationBits').subscribe(out => {
        this.findingDropdownConfig.translationBits = out;
      }),
      this.translate.stream('pelvisMRT.bones.differentialDiagnosisList.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisList = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('pelvisMRT.bones.anfhDifferentialDiagnosisOptions.options').subscribe((out: DropdownModel[]) => {
        this.anfhDifferentialDiagnosisOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
