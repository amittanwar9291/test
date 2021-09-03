import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';

import { VesselsUiModel } from '@models/headMRT/ui/vessels/vessels-ui.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import { VesselsFindingTypeEnum } from '@enums/headMRT/vessels/vessels-finding-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { nameof } from 'ts-simple-nameof';
import { VesslesValidationModel } from '@models/headMRT/ui/vessels/vessels-validation.model';
import { TechnologyUiModel } from '@models/headMRT/ui/technology/technology-ui.model';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { VesselsHelperService } from './vessels-helper.service';

@Component({
  selector: 'rr-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss']
})
export class VesselsComponent extends SlideBaseComponent<VesselsUiModel> {
  largeLocalizerOpen: string;

  areFindingsEnum = AreFindingsEnum;
  vesselsFindingTypeEnum = VesselsFindingTypeEnum;
  findingHandler: DynamicComponentHandler<VesselsFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  isDWIInAnySequence: boolean;
  isContrastEnhanced: boolean;

  activeTabIndex = 0;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private vesselHelperService: VesselsHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, VesselsUiModel, commonServices, VesslesValidationModel);

    this.subscriptions.push(
      this.vesselHelperService.largeLocalizerOpen.subscribe(value => {
        this.largeLocalizerOpen = value;
      })
    );

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, VesselsFindingUiModel);
    this.initDynamicComponentConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: VesselsUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: VesselsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.isDWIInAnySequence = technologyModel.sequences.some(
        sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted
      );
      this.isContrastEnhanced = technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  isDropdownDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isFindingType(type: VesselsFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === type;
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.vessels.findingTypes').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('headMRT.vessels.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  initDynamicComponentConfig(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.findingType = nameof<VesselsFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'hea_m_040106';
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'hea_m_040107';
    this.findingDropdownConfig.itemCount = 8;
  }

  onLargeLocalizerClosed() {
    this.vesselHelperService.largeLocalizerOpen.next(null);
  }

  arteriesSegmentsLocalizerCondition() {
    if (this.findingHandler.currentItem.findingType === VesselsFindingTypeEnum.Ischemia) {
      return false;
    } else if (this.findingHandler.currentItem.findingType === VesselsFindingTypeEnum.Aneurysm) {
      return true;
    }
  }
}
