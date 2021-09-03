import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component, OnDestroy } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { SoftPartsFindingTypeEnum, SoftPartsSiteTypeEnum } from '@enums/thoraxCT/soft-parts';
import { FindingDropdownModel } from '@models/shared/dropdown/finding-dropdown.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { SoftPartsTranslationsLabelsModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-translations-labels.model';

import { SoftPartsUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-ui.model';
import { SoftPartsValidationModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-validation.model';
import { TechnologyUiModel } from '@models/thoraxCT/ui/technology/technology-ui.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SoftPartsHelperService } from './soft-parts-helper.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SoftPartsPresetsHttpService } from '@services/thoraxCT/http/soft-parts/soft-parts-presets-http.service';

@Component({
  selector: 'rr-soft-parts',
  templateUrl: './soft-parts.component.html',
  styleUrls: ['./soft-parts.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SoftPartsPresetsHttpService
    }
  ]
})
export class SoftPartsComponent extends SlideBaseComponent<SoftPartsUiModel> implements OnDestroy {
  isLargeLocalizerOpen: boolean;

  findingHandler: DynamicComponentHandler<SoftPartsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindingsEnum = AreFindingsEnum;
  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;
  softPartsFindingTypeEnum = SoftPartsFindingTypeEnum;
  spineLocationDisablePartEnum = SpineSelectionAccessibilityModeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private softPartsHelperService: SoftPartsHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftPartsUiModel, commonServices, SoftPartsValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftPartsFindingUiModel);
    this.initializeDynamicDropdownConfig();

    this.subscriptions.push(
      this.softPartsHelperService.isLargeLocalizerOpen.subscribe(value => {
        this.isLargeLocalizerOpen = value;
      })
    );

    this.registerCallbacks();
    this.registerConnection();
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.softPartsHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SoftPartsUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: SoftPartsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.softParts.findingTypes.options').subscribe((out: FindingDropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
        this.findingDropdownConfig.translationBits.findingTypes = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.softParts.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxCT.softParts.addNewFindings.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );

    this.subscriptions.push(
      this.translate
        .stream('thoraxCT.softParts.translationBits')
        .subscribe((out: any) => Object.assign(this.findingDropdownConfig.translationBits, out))
    );
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.findingType = 'findingType';
    this.findingDropdownConfig.translationBits = new SoftPartsTranslationsLabelsModel();
    this.findingDropdownConfig.autoConfigFindingRRId = 'tho_c_070106';
  }

  isCurrentItem(item: SoftPartsFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  isTabView(): boolean {
    return [
      this.softPartsFindingTypeEnum.PleuralMass,
      this.softPartsFindingTypeEnum.PleuralThickening,
      this.softPartsFindingTypeEnum.ChestWallSoftTissueMass
    ].includes(this.findingHandler.currentItem.findingType);
  }

  onLargeLocalizerClosed() {
    this.softPartsHelperService.isLargeLocalizerOpen.next(false);
  }

  getCustomLabel(
    index: number,
    softPartsHandler: DynamicComponentHandler<SoftPartsFindingUiModel>,
    translationBits: SoftPartsTranslationsLabelsModel
  ): string {
    const siteLabelFindings = [
      SoftPartsFindingTypeEnum.PleuralEffusion,
      SoftPartsFindingTypeEnum.PleuralThickening,
      SoftPartsFindingTypeEnum.Pneumothorax,
      SoftPartsFindingTypeEnum.PleuralMass,
      SoftPartsFindingTypeEnum.ChestWallSoftTissueMass
    ];
    let result = '';

    const { findingType, siteType } = softPartsHandler.collection[index];

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
        switch (siteType) {
          case SoftPartsSiteTypeEnum.Left:
            result += translationBits.left;
            break;
          case SoftPartsSiteTypeEnum.Right:
            result += translationBits.right;
            break;
          case SoftPartsSiteTypeEnum.Median:
            result += translationBits.median;
            break;
        }
      }
    }
    return result;
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.softPartsHelperService.isLargeLocalizerOpen.next(false);
  }
}
