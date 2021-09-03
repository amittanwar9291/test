import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { FractureClassificationTypeEnum } from '@enums/handMRT/bones';
import { BonesFindingTypeEnum } from '@enums/handMRT/bones/bones-finding-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { HandJointsPageTypeEnum } from '../../shared/hand-joints/large/hand-joints-page-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { BonesUiModel } from '@models/handMRT/ui/bones/bones-ui.model';
import { BonesValidationModel } from '@models/handMRT/ui/bones/bones-validation.model';
import { LocalizationUiModel } from '@models/handMRT/ui/localization/localization-ui.model';
import { TechnologyUiModel } from '@models/handMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { nameof } from 'ts-simple-nameof';
import { BonesHelperService, ComplexLocalizerData } from './bones-helper.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { BonesPresetHttpService } from '@services/handMRT/http/bones/bones-preset-http.service';

@Component({
  selector: 'rr-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetHttpService
    }
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> {
  largeLocalizerOpen: ComplexLocalizerData;
  localizationSide: LocationTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  handJointsPageTypeEnum = HandJointsPageTypeEnum;

  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  tumorDifferentialDiagnoseType: DropdownModel[];
  tumourActiveTabIndex = 0;
  bonesFindingType = BonesFindingTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);

    this.subscriptions.push(
      this.bonesHelperService.largeLocalizerOpen.subscribe(value => {
        this.largeLocalizerOpen = value;
      })
    );

    this.subscriptions.push(
      this.bonesHelperService.localizationSide.subscribe(value => {
        this.localizationSide = value;
      })
    );

    this.registerSaveCallback((model: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
    });

    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      if (localizationModel?.localization) {
        const side = localizationModel.localization.right ? this.locationTypeEnum.Right : this.locationTypeEnum.Left;
        this.localizationSide = side;
        this.bonesHelperService.localizationSide.next(side);
      }
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.bonesHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });

    this.registerGetCallback((model: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.findingsConfiguration();
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  getCustomLabel(index: number, sequenceHandler: DynamicComponentHandler<BonesFindingUiModel>, translationBits): string {
    if (sequenceHandler.currentItem.findingType === BonesFindingTypeEnum.Fracture) {
      const { involvedBonesLocalizer, standardVariantsType } = sequenceHandler.collection[index];
      let currSelectedFracture = '';
      for (const key in involvedBonesLocalizer) {
        if (involvedBonesLocalizer[key]) {
          if (key.includes('Metacarpal')) {
            currSelectedFracture = 'Metacarpal';
          } else if (key.includes('Phalanx')) {
            currSelectedFracture = 'Phalanx';
          } else {
            currSelectedFracture = key;
          }
        }
      }
      if (currSelectedFracture || standardVariantsType) {
        const key = Object.keys(translationBits).find(translationBitKey =>
          [currSelectedFracture, standardVariantsType].includes(translationBitKey)
        );
        return translationBits[key];
      }
    }
  }

  findingsConfiguration() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'han_m_040106';
    columnIds.iDescribeRadioRRId = 'han_m_040108';
    columnIds.iKnowRadioRRId = 'han_m_040109';
    columnIds.buttonRRId = 'sho_m_060107';
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('handMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('handMRT.bones.translationBits').subscribe(out => {
        this.findingDropdownConfig.translationBits = out;
      }),
      this.translate.stream('handMRT.bones.addNewFinding.value').subscribe(out => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  isCurrentItem(item: BonesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  onLargeLocalizerClose() {
    if (this.largeLocalizerOpen.cleanupCallback) {
      this.largeLocalizerOpen.cleanupCallback(this.findingHandler.currentItem);
    }
    this.removeValidationError();
    this.findingHandler.currentItem.fractureClassificationType = FractureClassificationTypeEnum.None;
    this.bonesHelperService.largeLocalizerOpen.next(null);
  }

  removeValidationError(): void {
    if (this.enumMapper.mapToString(this.findingHandler.currentItem.handJointsLocalizer) !== 'None') {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.handJointsLocalizer));
    }
    if (this.enumMapper.mapToString(this.findingHandler.currentItem.involvedBonesLocalizer) !== 'None') {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.involvedBonesLocalizer));
    }
    if (this.enumMapper.mapToString(this.findingHandler.currentItem.involvedBonesType) !== 'None') {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.involvedBonesType));
    }
  }
}
