import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { LymphaticSystemUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-ui.model';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { LymphaticSystemValidationModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-validation.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { TechnologyUiModel } from '@models/abdomenMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequenceUiModel } from '@models/abdomenMRT/ui/technology/sequence-ui.model';
import { LymphaticSystemFindingTypeEnum } from '@enums/abdomenMRT/lymphatic-system';
import { AreFindingsExtendedEnum } from '@enums/abdomenMRT/are-findings-extended.enum';
import { LymphNodeStationsFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymph-node-stations-finding-ui.model';
import { findingCollectionPostSaveCleanup, findingCollectionPreSaveCleanup } from '@abstractions/dynamic-base/finding-save-cleanup';
import { ConfigurationLargeLocalizerConfig } from '@models/spineCT/ui/configuration/configuration-large-localizer-config.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { compact } from 'lodash';

@Component({
  selector: 'rr-lymphatic-system',
  templateUrl: './lymphatic-system.component.html',
  styleUrls: ['./lymphatic-system.component.scss']
})
export class LymphaticSystemComponent extends SlideBaseComponent<LymphaticSystemUiModel> {
  areFindingsEnum = AreFindingsExtendedEnum;
  lymphaticSystemFindingTypeEnum = LymphaticSystemFindingTypeEnum;
  findingHandler: DynamicComponentHandler<LymphaticSystemFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  nestedFindingDropdownConfig: FindingColumnConfig;
  nestedFindingLymphNodeStationsHandler: DynamicComponentHandler<LymphNodeStationsFindingUiModel>;

  largeLocalizerConfig: ConfigurationLargeLocalizerConfig;

  W085: DropdownGroupedModel[];

  isCM: boolean;
  isDWI: boolean;
  closedLocalizer: boolean;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService
  ) {
    super(navService, slideRequestService, changeDetectionService, LymphaticSystemUiModel, commonServices, LymphaticSystemValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, LymphaticSystemFindingUiModel);
    this.nestedFindingLymphNodeStationsHandler = new DynamicComponentHandler(this.logger, [], LymphNodeStationsFindingUiModel);

    this.initDynamicComponentConfig();
    this.initNestedDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: LymphaticSystemUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
      const findingCurrentItemIndex = this.findingHandler.currentItemIndex;
      this.nestedFindingLymphNodeStationsHandler.reinitializeCollection(modelOut.findings[findingCurrentItemIndex].lymphNodeStations);
    });

    this.registerSaveCallback((modelOut: LymphaticSystemUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
      this.removeDeletedLymphNodeStationsFindings(modelOut);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
      this.model.findings.forEach(finding => {
        findingCollectionPreSaveCleanup(finding.lymphNodeStations);
      });
    });
  }

  private removeDeletedLymphNodeStationsFindings(modelOut: LymphaticSystemUiModel): void {
    this.model.findings.forEach(finding => {
      const incomingModel = modelOut.findings.find(x => x.scopeId === finding.scopeId);
      if (incomingModel) {
        findingCollectionPostSaveCleanup(finding.lymphNodeStations, incomingModel.lymphNodeStations);
      }
    });
  }

  updateLymphNodeStationsFindingHandler(): void {
    this.nestedFindingLymphNodeStationsHandler.reinitializeCollection(this.findingHandler.currentItem.lymphNodeStations);
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('abdomenMRT.lymphaticSystem.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('abdomenMRT.lymphaticSystem.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.nestedFindingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('abdomenMRT.lymphaticSystem.findingTypesNested.options').subscribe((out: DropdownModel[]) => {
        this.nestedFindingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('abdomenMRT.lymphaticSystem.addLymphNodeStation.value').subscribe((out: string) => {
        this.nestedFindingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('abdomenMRT.lymphaticSystem.W085').subscribe((out: DropdownGroupedModel[]) => {
        this.W085 = Object.values(out);
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<LymphaticSystemFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.itemCount = 8;
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'abd_m_110106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'abd_m_110107';
    this.findingDropdownConfig.subFindings = ['lymphNodeStations'];
  }

  initNestedDynamicComponentConfig(): void {
    this.nestedFindingDropdownConfig = new FindingColumnConfig();
    this.nestedFindingDropdownConfig.findingType = nameof<LymphNodeStationsFindingUiModel>(m => m.findingType);
    this.nestedFindingDropdownConfig.itemCount = 8;
    this.nestedFindingDropdownConfig.findingColumnIds.findingRRId = 'abd_m_110303';
    this.nestedFindingDropdownConfig.findingColumnIds.buttonRRId = 'abd_m_110304';
  }

  setLargeLocalizerOpened(localizerOptions: ConfigurationLargeLocalizerConfig) {
    this.largeLocalizerConfig = localizerOptions;
    this.closedLocalizer = false;
  }

  onLargeLocalizerClosed() {
    if (
      compact(Object.values(this.largeLocalizerConfig.localizerModel)).length !== 1 ||
      this.largeLocalizerConfig.localizerModel.osSacrum ||
      this.largeLocalizerConfig.localizerModel.osCoccygis
    ) {
      this.validationHelperService.removeError('spineLocalizer');
    }
    this.largeLocalizerConfig = null;
    this.closedLocalizer = true;
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.isCM = technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes;
      this.isDWI = technologyUiModel && technologyUiModel.sequences.some((model: SequenceUiModel) => model.weightingType === 'DWI');
    });
  }
}
