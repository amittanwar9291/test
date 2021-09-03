import { Component, OnDestroy } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { LocalizationUiModel, MyelonFindingUiModel, MyelonUiModel, TechnologyUiModel } from '@models/spineCT';
import { nameof } from 'ts-simple-nameof';
import { MyelonValidationModel } from '@models/spineCT/ui/myelon/myelon-validation.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { MyelonSpinalCanalAreFindings } from '@enums/spineCT/myelon/myelon-spinal-canal-are-findings';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineCTMyelonHelperService, SpineCTMyelonLocalizerConfig } from './spine-ct-myelon-helper.service';
import { MyelonSpinalCanalFindingTypeEnum } from '@enums/spineCT/myelon/myelon-spinal-canal-finding-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-myelon',
  templateUrl: './myelon.component.html',
  styleUrls: ['./myelon.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MyelonComponent extends SlideBaseComponent<MyelonUiModel> implements OnDestroy {
  areFindingsEnum = MyelonSpinalCanalAreFindings;
  findingTypeEnum = MyelonSpinalCanalFindingTypeEnum;
  spineLocationLogicTypeEnum = SpineLocationLogicTypeEnum;

  findingHandler: DynamicComponentHandler<MyelonFindingUiModel>;
  findingColumnConfig: FindingColumnConfig;

  spineLocalizerPermittedSelection: SpineLocation;

  localizerConfig: SpineCTMyelonLocalizerConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private spineCtHelperService: SpineCtHelperService,
    private spineCTMyelonHelperService: SpineCTMyelonHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, MyelonUiModel, commonServices, MyelonValidationModel);

    this.findingHandler = new DynamicComponentHandler<MyelonFindingUiModel>(this.logger, this.model.findings, MyelonFindingUiModel);

    this.registerCallbacks();
    this.initDynamicComponentConfig();
    this.registerConnection();

    this.subscriptions.push(this.spineCTMyelonHelperService.largeLocalizerConfig.subscribe(v => (this.localizerConfig = v)));
  }

  private registerCallbacks() {
    this.registerGetCallback((outModel: MyelonUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerSaveCallback((outModel: MyelonUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyUiModel: TechnologyUiModel) => {
      this.spineCTMyelonHelperService.isCMYes.next(technologyUiModel.cmReinforcedType === SimpleAnswerEnum.Yes);
    });
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineCtHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
  }

  initDynamicComponentConfig(): void {
    this.findingColumnConfig = new FindingColumnConfig();
    this.findingColumnConfig.findingType = nameof<MyelonFindingUiModel>(m => m.findingType);
    this.findingColumnConfig.itemCount = 8;
    this.findingColumnConfig.findingColumnIds.buttonRRId = 'spi_c_070107';
    this.findingColumnConfig.findingColumnIds.findingRRId = 'spi_c_070106';
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  closeLargeLocalizer(): void {
    this.spineCTMyelonHelperService.largeLocalizerConfig.next(null);
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineCT.myelonSpinalCanal.findingTypes.options').subscribe(out => {
        this.findingColumnConfig.dropdownValues = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingColumnConfig.placeholder = out;
      }),
      this.translate.stream('spineCT.myelonSpinalCanal.addNewFinding.value').subscribe((out: string) => {
        this.findingColumnConfig.buttonText = out;
      })
    );
  }

  clearActiveTab() {
    this.spineCTMyelonHelperService.activeTabIndex.next(0);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.clearActiveTab();
    this.spineCTMyelonHelperService.largeLocalizerConfig.next(null);
  }
}
