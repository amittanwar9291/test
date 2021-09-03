import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { ConfigurationFindingTypeEnum } from '@enums/spineMRT/configuration/configuration-finding-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ConfigurationFindingUiModel } from '@models/spineMRT/ui/configuration/configuration-finding-ui.model';
import { ConfigurationUiModel } from '@models/spineMRT/ui/configuration/configuration-ui.model';
import { ConfigurationValidationModel } from '@models/spineMRT/ui/configuration/configuration-validation.model';

import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { LocalizationUiModel } from '@models/spineMRT/ui/localization/localization-ui.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { nameof } from 'ts-simple-nameof';
import { ConfigurationLargeLocalizerConfig } from '@models/spineMRT/ui/configuration/configuration-large-localizer-config.model';

@Component({
  selector: 'rr-spine-mrt-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ConfigurationComponent extends SlideBaseComponent<ConfigurationUiModel> {
  findingHandler: DynamicComponentHandler<ConfigurationFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;

  configurationFindingTypeEnum: typeof ConfigurationFindingTypeEnum;

  localizerLogicType: SpineLocationLogicTypeEnum;
  findingTypes: DropdownModel[];
  spineLocalizerPermittedSelection: SpineLocation;

  largeLocalizerConfig: ConfigurationLargeLocalizerConfig;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private spineHelperService: SpineHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, ConfigurationUiModel, commonServices, ConfigurationValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, ConfigurationFindingUiModel);

    this.configurationFindingTypeEnum = ConfigurationFindingTypeEnum;

    this.initializeDynamicDropdownConfig();
    this.registerCallbacks();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerSaveCallback((outModel: ConfigurationUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(outModel.findings);
    });

    this.registerGetCallback((outModel: ConfigurationUiModel) => {
      this.findingHandler.reinitializeCollection(outModel.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.spineLocalizerPermittedSelection = this.spineHelperService.setAndReturnSpineLocalizerPermittedSelection(localizationUiModel);
    });
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineMRT.configuration.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.configuration.addNewFindings.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 7;
    this.findingDropdownConfig.findingType = nameof<ConfigurationFindingUiModel>(m => m.findingType);
  }

  setLargeLocalizerOpened(localizerOptions: ConfigurationLargeLocalizerConfig) {
    this.largeLocalizerConfig = localizerOptions;
  }

  onLargeLocalizerClosed() {
    this.largeLocalizerConfig = null;
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }
}
