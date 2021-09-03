import { Component, OnDestroy } from '@angular/core';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';

import { DiscUiModel, DiscFindingUiModel, TechnologyUiModel, LocalizationUiModel } from '@models/spineCT';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { DiscFindingTypeEnum } from '@enums/spineCT/disc/disc-finding-type.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { Subscription } from 'rxjs';
import { DiscHelperService, SpineCTLargeLocalizerConfig } from './disc-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { DiskValidationModel } from '@models/spineCT/ui/disc/disk-validation.model';

@Component({
  selector: 'rr-disc',
  templateUrl: './disc.component.html',
  styleUrls: ['./disc.component.scss']
})
export class DiscComponent extends SlideBaseComponent<DiscUiModel> implements OnDestroy {
  areFindingsEnum = AreFindingsEnum;
  discFindingTypeEnum = DiscFindingTypeEnum;

  findingHandler: DynamicComponentHandler<DiscFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  largeLocalizerSubscription: Subscription;

  spineLocalizerPermittedSelection: SpineLocation;
  largeLocalizerConfig: SpineCTLargeLocalizerConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private discHelperService: DiscHelperService,
    private spineCtHelperService: SpineCtHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, DiscUiModel, commonServices, DiskValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, DiscFindingUiModel);

    this.registerCallbacks();
    this.registerConnection();
    this.configureFindingColumn();

    this.largeLocalizerSubscription = this.discHelperService.largeLocalizerOpenedConfig.subscribe(
      (config: SpineCTLargeLocalizerConfig) => (this.largeLocalizerConfig = config)
    );
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: DiscUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: DiscUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.discHelperService.isCMYes.next(technologyModel.cmReinforcedType === 'Yes');
    });

    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineCtHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
  }

  private configureFindingColumn(): void {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 9;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'spi_c_050107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'spi_c_050106';
  }

  isCurrentItem(items: DiscFindingTypeEnum[]): boolean {
    return items.includes(this.findingHandler.currentItem.findingType);
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineCT.disc.findingTypes.options').subscribe(out => {
        this.findingDropdownConfig.dropdownValues = out;
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      }),
      this.translate.stream('spineCT.disc.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      }),
      this.translate.stream('spineCT.disc.translationBits').subscribe((out: string) => {
        this.findingDropdownConfig.translationBits = out;
      })
    );
  }

  closeLargeLocalizer() {
    this.discHelperService.largeLocalizerOpenedConfig.next(null);
  }

  setTabIndex() {
    this.discHelperService.activeTabIndex.next(0);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.discHelperService.largeLocalizerOpenedConfig.next(null);
    this.largeLocalizerSubscription.unsubscribe();
  }
}
