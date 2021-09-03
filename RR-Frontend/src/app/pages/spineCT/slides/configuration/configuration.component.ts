import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { NavigationService } from '@services/shared';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ConfigurationUiModel } from '@models/spineCT';
import { LocalizationUiModel } from '@models/spineCT/ui/localization/localization-ui.model';
import { ConfigurationFindingUiModel } from '@models/spineCT/ui/configuration/configuration-finding-ui.model';
import { ConfigurationFindingTypeEnum } from '@enums/spineCT/configuration/configuration-finding-type.enum';
import { ISpineLocationOptions } from '@interfaces/shared/spine/localizers/spine-location-options.interface';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { ConfigurationValidationModel } from '@models/spineCT/ui/configuration/configuration-validation.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { nameof } from 'ts-simple-nameof';
import { ConfigurationLargeLocalizerConfig } from '@models/spineCT/ui/configuration/configuration-large-localizer-config.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';

@Component({
  selector: 'rr-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class ConfigurationComponent extends SlideBaseComponent<ConfigurationUiModel> {
  findingTypes: DropdownModel[];
  findingHandler: DynamicComponentHandler<ConfigurationFindingUiModel>;
  findingType = ConfigurationFindingTypeEnum;
  localizerOptions: ISpineLocationOptions;
  findingDropdownConfig: FindingColumnConfig;
  largeLocalizerConfig: ConfigurationLargeLocalizerConfig;
  spineLocalizerPermittedSelection: SpineLocation;
  areFindingsEnum = AreFindingsEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public spineHelperService: SpineCtHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, ConfigurationUiModel, commonServices, ConfigurationValidationModel);
    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, ConfigurationFindingUiModel);
    this.localizerOptions = { isOpen: false };
    this.registerCallbacks();
    this.initializeDynamicDropdownConfig();
    this.registerConnection();
  }

  private registerCallbacks() {
    this.registerGetCallback((model: ConfigurationUiModel) => {
      this.findingHandler.reinitializeCollection(model.findings);
    });

    this.registerSaveCallback((model: ConfigurationUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(model.findings);
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

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 9;
    this.findingDropdownConfig.findingType = nameof<ConfigurationFindingUiModel>(m => m.findingType);
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'spi_c_040107';
    this.findingDropdownConfig.findingColumnIds.findingRRId = 'spi_c_040106';
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineCT.configuration.findingTypes.options').subscribe(out => {
        this.findingDropdownConfig.dropdownValues = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineCT.configuration.addNewFindings.value').subscribe((out: string) => {
        this.findingDropdownConfig.buttonText = out;
      })
    );
  }

  setLargeLocalizerOpened(localizerOptions: ConfigurationLargeLocalizerConfig) {
    this.largeLocalizerConfig = localizerOptions;
  }

  onLargeLocalizerClosed() {
    this.largeLocalizerConfig = null;
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== this.areFindingsEnum.Yes;
  }
}
