import { Component, OnDestroy } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { IntervertebralDiscJointsUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { IntervertebralDiscJointsFindingTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints/intervertebral-disc-joints-finding-types.enum';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { IntervertebralDiscJointsHelperService } from './intervertebral-disc-joints-helper.service';
import { Subscription } from 'rxjs';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { IntervertebralDiscJointsValidationModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-validation.model';
import { TechnologyUiModel } from '@models/spineMRT/ui/technology/technology-ui.model';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { PathologyTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';
import { IntervertebralDiscJointsLargeLocalizerConfig } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-large-localizer-config.model';

@Component({
  selector: 'rr-intervertebral-disc-joints',
  templateUrl: './intervertebral-disc-joints.component.html',
  styleUrls: ['./intervertebral-disc-joints.component.scss']
})
export class IntervertebralDiscJointsComponent extends SlideBaseComponent<IntervertebralDiscJointsUiModel> implements OnDestroy {
  areFindingsEnum = AreFindingsEnum;
  intervertebralDiscJointsFindingTypesEnum = IntervertebralDiscJointsFindingTypesEnum;
  pathologyTypesEnum = PathologyTypesEnum;

  dynamicConfig: FindingColumnConfig;
  findingHandler: DynamicComponentHandler<IntervertebralDiscJointsFindingUiModel>;
  findingTypes: DropdownModel[];

  largeLocalizerSubscription: Subscription;

  spineLocalizerPermittedSelection: SpineLocation;
  largeLocalizerConfig: IntervertebralDiscJointsLargeLocalizerConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private spineHelperService: SpineHelperService,
    private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      IntervertebralDiscJointsUiModel,
      commonServices,
      IntervertebralDiscJointsValidationModel
    );

    this.findingHandler = new DynamicComponentHandler<IntervertebralDiscJointsFindingUiModel>(
      this.logger,
      this.model.findings,
      IntervertebralDiscJointsFindingUiModel
    );
    this.registerCallbacks();
    this.registerConnection();
    this.configureFindingColumn();

    this.largeLocalizerSubscription = this.intervertebralDiscJointsHelperService.largeLocalizerOpened.subscribe(
      (config: IntervertebralDiscJointsLargeLocalizerConfig) => (this.largeLocalizerConfig = config)
    );
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: IntervertebralDiscJointsUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: IntervertebralDiscJointsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.intervertebralDiscJointsHelperService.isCMYes.next(technologyModel.cmReinforcedType === 'Yes');
    });

    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
  }

  private configureFindingColumn(): void {
    this.dynamicConfig = new FindingColumnConfig();
    this.dynamicConfig.itemCount = 9;
    this.dynamicConfig.findingColumnIds.buttonRRId = 'spi_m_050107';
    this.dynamicConfig.findingColumnIds.findingRRId = 'spi_m_050106';
    this.dynamicConfig.groupedOptions = true;
  }

  isCurrentItem(items: IntervertebralDiscJointsFindingTypesEnum[]): boolean {
    return items.includes(this.findingHandler.currentItem.findingType);
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineMRT.disc.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.dynamicConfig.dropdownValues = Object.values(out);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.dynamicConfig.placeholder = out;
      }),
      this.translate.stream('spineMRT.disc.addNewFinding.value').subscribe((out: string) => {
        this.dynamicConfig.buttonText = out;
      }),
      this.translate.stream('spineMRT.disc.translationBits').subscribe((out: string) => {
        this.dynamicConfig.translationBits = out;
      })
    );
  }

  customLabelCalculator(index: number, handler: DynamicComponentHandler<IntervertebralDiscJointsFindingUiModel>, translationBits): string {
    let base = '';
    const currentFinding = handler.collection[index];
    if (
      currentFinding.findingType !== IntervertebralDiscJointsFindingTypesEnum.None &&
      currentFinding.pathologyType === PathologyTypesEnum.None
    ) {
      base += ` ${translationBits[currentFinding.findingType]}`;
    } else if (
      currentFinding.findingType === IntervertebralDiscJointsFindingTypesEnum.RheumatoidArthritis &&
      currentFinding.pathologyType !== PathologyTypesEnum.None
    ) {
      const a = currentFinding.findingType + currentFinding.pathologyType;
      base = translationBits[a];
    }
    return base;
  }

  closeLargeLocalizer() {
    this.intervertebralDiscJointsHelperService.largeLocalizerOpened.next(null);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.intervertebralDiscJointsHelperService.largeLocalizerOpened.next(null);
    this.largeLocalizerSubscription.unsubscribe();
  }
}
