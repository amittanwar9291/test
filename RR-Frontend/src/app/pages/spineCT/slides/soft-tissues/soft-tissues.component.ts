import { Component, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LocalizationUiModel, SoftTissuesUiModel, TechnologyUiModel } from '@models/spineCT';
import { SoftTissuesFindingUiModel } from '@models/spineCT/ui/soft-tissues/soft-tissues-finding-ui.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SoftTissuesFindingTypeEnum } from '@enums/spineCT/soft-tissues/soft-tissues-finding-type.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SoftTissuesHelperService, SpineCTSoftTissuesLargeLocalizerConfig } from './soft-tissues-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { SoftTissuesValidationModel } from '@models/spineCT/ui/soft-tissues/soft-tissues-validation-model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-soft-tissues',
  templateUrl: './soft-tissues.component.html',
  styleUrls: ['./soft-tissues.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissuesComponent extends SlideBaseComponent<SoftTissuesUiModel> implements OnDestroy {
  areFindingsEnum = AreFindingsEnum;
  softTissuesFindingTypeEnum = SoftTissuesFindingTypeEnum;

  findingHandler: DynamicComponentHandler<SoftTissuesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  spineLocalizerPermittedSelection: SpineLocation;
  largeLocalizerConfig: SpineCTSoftTissuesLargeLocalizerConfig;
  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private softTissuesHelperService: SoftTissuesHelperService,
    private spineCtHelperService: SpineCtHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftTissuesUiModel, commonServices, SoftTissuesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftTissuesFindingUiModel);

    this.registerCallbacks();
    this.registerConnection();
    this.configureFindingColumn();

    this.subscriptions.push(
      this.softTissuesHelperService.largeLocalizerOpenedConfig.subscribe(
        (config: SpineCTSoftTissuesLargeLocalizerConfig) => (this.largeLocalizerConfig = config)
      )
    );
    this.softTissuesHelperService.reportId = this.model.reportId;
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: SoftTissuesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
      this.softTissuesHelperService.reportId = modelOut.reportId;
    });

    this.registerSaveCallback((modelOut: SoftTissuesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
      this.softTissuesHelperService.reportId = modelOut.reportId;
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.softTissuesHelperService.isCMYes.next(technologyModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });

    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineCtHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
  }

  private configureFindingColumn(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    const columnIds = this.findingDropdownConfig.findingColumnIds;
    columnIds.findingRRId = 'spi_c_080106';
    columnIds.iDescribeLabelRRId = 'spi_c_080107';
    columnIds.iKnowLabelRRId = 'spi_c_080108';
    columnIds.iDescribeRadioRRId = 'spi_c_080111';
    columnIds.iKnowRadioRRId = 'spi_c_080110';
    columnIds.buttonRRId = 'spi_c_080109';
  }

  isCurrentItem(item: SoftTissuesFindingTypeEnum): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineCT.softTissues.findingTypes.options').subscribe(out => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('spineCT.softTissues.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  closeLargeLocalizer() {
    this.softTissuesHelperService.largeLocalizerOpenedConfig.next(null);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.softTissuesHelperService.largeLocalizerOpenedConfig.next(null);
    this.softTissuesHelperService.isCMYes.next(null);
    this.softTissuesHelperService.activeTabIndex.next(null);
  }
}
