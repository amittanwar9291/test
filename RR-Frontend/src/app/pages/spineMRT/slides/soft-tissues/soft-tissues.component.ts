import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SoftTissueFindingTypeEnum } from '@enums/spineMRT/soft-tissues';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineDirectionalLocationMapper } from '@mappings/spineMRT/shared/spine-directional-location/spine-directional-location.mapper';
import { TechnologyUiModel } from '@models/feetMRT/ui/technology/technology-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ReportUiModel } from '@models/shared/report/report-ui.model';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';

import { SoftTissuesUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-ui.model';
import { SoftTissuesValidationModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-validation.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SpineSoftTissueLocalizerConfig } from '@models/spineMRT/ui/soft-tissues/spine-soft-tissue-localizer-config';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-spine-mrt-soft-tissues',
  templateUrl: './soft-tissues.component.html',
  styleUrls: ['./soft-tissues.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissuesComponent extends SlideBaseComponent<SoftTissuesUiModel> {
  findingTypes: DropdownModel[];
  findingHandler: DynamicComponentHandler<SoftTissuesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  reportData: ReportUiModel;
  isCMYes = false;
  isC0ToC7: boolean;
  isTH1ToL5: boolean;

  isFirstPageLocalizerL = false;
  isFirstPageLocalizerC = false;

  areFindingsEnum: typeof AreFindingsEnum;
  softTissueFindingTypeEnum: typeof SoftTissueFindingTypeEnum;

  largeLocalizerConfig: SpineSoftTissueLocalizerConfig;

  spineLocalizerPermittedSelection: SpineLocation;

  activeTabIndex = 0;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private enumMapper: EnumMapper,
    private spineDirectionalLocationMapper: SpineDirectionalLocationMapper,
    private spineHelperService: SpineHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, SoftTissuesUiModel, commonServices, SoftTissuesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, SoftTissuesFindingUiModel);
    this.initializeDynamicDropdownConfig();
    this.areFindingsEnum = AreFindingsEnum;
    this.softTissueFindingTypeEnum = SoftTissueFindingTypeEnum;

    this.registerCallbacks();
    this.registerConnection();
    this.reportData = this.navService.getReportData();
  }

  private registerCallbacks() {
    this.registerSaveCallback((outModel: SoftTissuesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerGetCallback((outModel: SoftTissuesUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);

      this.findingHandler.collection.forEach(finding => {
        finding.spineLocationShown = false;
        finding.directionalLocationShown = false;
      });
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      this.isC0ToC7 =
        localizationModel.spineLocation.c0 ||
        localizationModel.spineLocation.c1 ||
        localizationModel.spineLocation.c2 ||
        localizationModel.spineLocation.c3 ||
        localizationModel.spineLocation.c4 ||
        localizationModel.spineLocation.c5 ||
        localizationModel.spineLocation.c6 ||
        localizationModel.spineLocation.c7;

      this.isTH1ToL5 =
        localizationModel.spineLocation.tH1 ||
        localizationModel.spineLocation.tH2 ||
        localizationModel.spineLocation.tH3 ||
        localizationModel.spineLocation.tH4 ||
        localizationModel.spineLocation.tH5 ||
        localizationModel.spineLocation.tH6 ||
        localizationModel.spineLocation.tH7 ||
        localizationModel.spineLocation.tH8 ||
        localizationModel.spineLocation.tH9 ||
        localizationModel.spineLocation.tH10 ||
        localizationModel.spineLocation.tH11 ||
        localizationModel.spineLocation.tH12 ||
        localizationModel.spineLocation.l1 ||
        localizationModel.spineLocation.l2 ||
        localizationModel.spineLocation.l3 ||
        localizationModel.spineLocation.l4 ||
        localizationModel.spineLocation.l5;

      this.spineHelperService.updateValidationModelForParavertebralMusclesFinding(this.isC0ToC7, this.isTH1ToL5);
      this.spineLocalizerPermittedSelection = this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationModel);
    });

    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.isCMYes = technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes;
    });
  }

  private initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.autoConfigFindingRRId = 'spi_m_080106';
    this.findingDropdownConfig.itemCount = 5;
  }

  setLargeLocalizerOpened(localizerOptions: SpineSoftTissueLocalizerConfig) {
    this.largeLocalizerConfig = localizerOptions;
  }

  onLargeLocalizerClosed() {
    this.findingHandler.currentItem.spineLocationShown = !this.findingHandler.currentItem.spineLocationShown;
    this.removeLocalizerValidationError(this.enumMapper);
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.softTissues.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.softTissues.addNewFinding.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }

  isCurrentItem(item: string): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  closeSpineDirectional() {
    this.findingHandler.currentItem.directionalLocationShown = !this.findingHandler.currentItem.directionalLocationShown;
    this.removeLocalizerValidationError(this.spineDirectionalLocationMapper);
  }

  removeLocalizerValidationError(mapper: EnumMapper | SpineDirectionalLocationMapper) {
    if (mapper.mapToString(this.findingHandler.currentItem[this.largeLocalizerConfig.localizerPropertyName]) !== 'None') {
      this.validationHelperService.removeError(this.largeLocalizerConfig.localizerPropertyName);
    }
  }
}
