import { PleuraUiModel } from './../../../../core/models/thoraxMRT/ui/pleura/pleura-ui.model';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { PleuraFindingTypeEnum } from '@enums/thoraxMRT/pleura/pleura-finding-type.enum';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { PleuraHelperService } from './pleura-helper.service';
import { TechnologyUiModel } from '@models/thoraxMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { PleuraValidationModel } from '@models/thoraxMRT/ui/pleura/pleura-validation.model';
import { PleuraTranslationsLabelsModel } from '@models/thoraxMRT/ui/pleura/pleura-translations-labels.model';
import { PleuraSiteTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-site-type.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';

@Component({
  selector: 'rr-soft-parts',
  templateUrl: './pleura.component.html',
  styleUrls: ['./pleura.component.scss']
})
export class PleuraComponent extends SlideBaseComponent<PleuraUiModel> {
  largeLocalizerOpen: string;
  isDWI: boolean;

  findingHandler: DynamicComponentHandler<PleuraFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  pleuraFindingTypeEnum = PleuraFindingTypeEnum;
  areFindingsEnum = AreFindingsEnum;
  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;
  spineLocationDisablePartEnum = SpineSelectionAccessibilityModeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private pleuraHelperService: PleuraHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, PleuraUiModel, commonServices, PleuraValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, PleuraFindingUiModel);
    this.initializeDynamicDropdownConfig();

    this.subscriptions.push(
      this.pleuraHelperService.largeLocalizerOpen.subscribe(value => {
        this.largeLocalizerOpen = value;
      })
    );

    this.registerCallbacks();
    this.registerConnection();

    this.initTranslations();
  }
  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.pleuraHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
      this.pleuraHelperService.isWeightingTypeDWI.next(technologyModel.sequences[0].weightingType === WeightingTypeEnum.DWI);
      this.isDWI = technologyModel.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI);
      let isWeightingTypeDWI = false;
      technologyModel.sequences.forEach(sequence => {
        if (sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted) {
          isWeightingTypeDWI = true;
        }
      });
      this.pleuraHelperService.isWeightingTypeDWI.next(isWeightingTypeDWI);
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: PleuraUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: PleuraUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.findingType = nameof<PleuraFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.autoConfigFindingRRId = 'tho_m_060106';
    this.findingDropdownConfig.translationBits = new PleuraTranslationsLabelsModel();
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('thoraxMRT.pleura.findingTypes.options').subscribe((out: FindingDropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
        this.findingDropdownConfig.translationBits.findingTypes = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxMRT.pleura.addNewFinding.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
    this.subscriptions.push(
      this.translate
        .stream('thoraxMRT.pleura.translationBits')
        .subscribe((out: any) => Object.assign(this.findingDropdownConfig.translationBits, out))
    );
  }
  onLargeLocalizerClosed() {
    this.pleuraHelperService.largeLocalizerOpen.next(null);
  }
  isCurrentItem(item: PleuraFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }
  getCustomLabel(
    index: number,
    softPartsHandler: DynamicComponentHandler<PleuraFindingUiModel>,
    translationBits: PleuraTranslationsLabelsModel
  ): string {
    const siteLabelFindings = [
      PleuraFindingTypeEnum.PleuralEffusion,
      PleuraFindingTypeEnum.PleuralThickeningMass,
      PleuraFindingTypeEnum.Pneumothorax,
      PleuraFindingTypeEnum.UpperAbdomenPancreas,
      PleuraFindingTypeEnum.UpperAbdomenLiverGallBladder,
      PleuraFindingTypeEnum.ChestWallSoftTissueMass
    ];
    let result = '';

    const { findingType, pleuraSiteType } = softPartsHandler.collection[index];

    if (softPartsHandler) {
      translationBits.findingTypes.map(finding => {
        if (finding.value === findingType) {
          if (translationBits[findingType] !== undefined) {
            result += translationBits[findingType];
          } else {
            result += finding.label;
          }
        } else {
          result += '';
        }
      });

      if (siteLabelFindings.includes(findingType)) {
        switch (pleuraSiteType) {
          case PleuraSiteTypeEnum.Left:
            result += translationBits.left;
            break;
          case PleuraSiteTypeEnum.Right:
            result += translationBits.right;
            break;
          case PleuraSiteTypeEnum.Median:
            result += translationBits.median;
        }
      }
    }
    return result;
  }
}
