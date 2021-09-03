import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { MediastinumFindingTypeEnum } from '@enums/thoraxMRT/mediastinum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { MediastinumLargeLocalizerConfigModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-large-localizer-config.model';
import { MediastinumUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-ui.model';
import { MediastinumValidationModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-validation.model';
import { TechnologyUiModel } from '@models/thoraxMRT/ui/technology/technology-ui.model';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { MediastinumHelperService } from './mediastinum-helper.service';

@Component({
  selector: 'rr-mediastinum',
  templateUrl: './mediastinum.component.html',
  styleUrls: ['./mediastinum.component.scss']
})
export class MediastinumComponent extends SlideBaseComponent<MediastinumUiModel> {
  findingHandler: DynamicComponentHandler<MediastinumFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  areFindingsEnum = AreFindingsEnum;
  mediastinumFindingTypeEnum = MediastinumFindingTypeEnum;
  largeLocalizerConfig: MediastinumLargeLocalizerConfigModel;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private mediastinumHelperService: MediastinumHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, MediastinumUiModel, commonServices, MediastinumValidationModel);

    this.mediastinumHelperService.largeLocalizerOpen.subscribe((value: MediastinumLargeLocalizerConfigModel) => {
      this.largeLocalizerConfig = value;
    });

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, MediastinumFindingUiModel);
    this.initializeDynamicDropdownConfig();

    this.registerCallbacks();
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: MediastinumUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: MediastinumUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.mediastinumHelperService.isCMYes.next(technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes);
      let isDWISelected = false;
      technologyUiModel.sequences.forEach(sequence => {
        if (sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted) {
          isDWISelected = true;
        }
      });
      this.mediastinumHelperService.isDWISelected.next(isDWISelected);
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('thoraxMRT.mediastinum.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('thoraxMRT.mediastinum.addNewFinding.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 4;
    this.findingDropdownConfig.findingType = 'findingType';
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'tho_m_040106';
    columnIds.iDescribeLabelRRId = 'tho_m_040112';
    columnIds.iKnowLabelRRId = 'tho_m_0401013';
    columnIds.iDescribeRadioRRId = 'tho_m_040114';
    columnIds.iKnowRadioRRId = 'tho_m_040115';
    columnIds.buttonRRId = 'tho_m_040107';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== AreFindingsEnum.Yes;
  }

  isCurrentItem(value: MediastinumFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === value;
  }

  onLargeLocalizerClosed() {
    if (Object.values(this.findingHandler.currentItem[this.largeLocalizerConfig.modelName]).filter(elem => elem).length > 0) {
      this.validationHelperService.removeError(this.largeLocalizerConfig.modelName);
    }
    this.mediastinumHelperService.largeLocalizerOpen.next(null);
  }
}
