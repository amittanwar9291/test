import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ConfigurationFindingUiModel } from '@models/spineCT/ui/configuration/configuration-finding-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { PathologyTypeEnum } from '@enums/spineCT/configuration/curvature-disorders/pathology-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { ConfigurationLargeLocalizerConfig } from '@models/spineCT/ui/configuration/configuration-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { nameof } from 'ts-simple-nameof';
import { Subscription } from 'rxjs';
import { compact } from 'lodash';

@Component({
  selector: 'rr-curvature-disorders',
  templateUrl: './curvature-disorders.component.html',
  styleUrls: ['./curvature-disorders.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CurvatureDisordersComponent implements OnInit, OnDestroy {
  @Input() model: ConfigurationFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();

  pathologyTypeEnum = PathologyTypeEnum;
  selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(private validationHelperService: ValidationHelperService, private spineHelperService: SpineCtHelperService) {}

  ngOnInit() {
    if (compact(Object.values(this.model.cervicalSpineLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.cervicalSpineLocation));
    }
    if (compact(Object.values(this.model.thoracicSpineLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.thoracicSpineLocation));
    }
    if (compact(Object.values(this.model.lumbarSpineLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.lumbarSpineLocation));
    }
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  openLargeLocalizer(accessibilityMode: SpineSelectionAccessibilityModeEnum) {
    let localizerConfig: ConfigurationLargeLocalizerConfig;

    switch (accessibilityMode) {
      case this.selectionAccessibilityModeEnum.C0toTH1:
        localizerConfig = new ConfigurationLargeLocalizerConfig(
          this.model.cervicalSpineLocation,
          SpineLocationLogicTypeEnum.OneDiscWithVertebre,
          SpineSelectionAccessibilityModeEnum.C0toTH1,
          'spineCT.configuration.localizationCervicalSpineTitle.value',
          'spineCT.configuration.localizerDescription.value'
        );
        break;
      case this.selectionAccessibilityModeEnum.TH1toL1:
        localizerConfig = new ConfigurationLargeLocalizerConfig(
          this.model.thoracicSpineLocation,
          SpineLocationLogicTypeEnum.OneDiscWithVertebre,
          SpineSelectionAccessibilityModeEnum.TH1toL1,
          'spineCT.configuration.localizationThoracicSpineTitle.value',
          'spineCT.configuration.localizerDescription.value'
        );
        break;
      case this.selectionAccessibilityModeEnum.L1toOsCoccygis:
        localizerConfig = new ConfigurationLargeLocalizerConfig(
          this.model.lumbarSpineLocation,
          SpineLocationLogicTypeEnum.OneDiscWithVertebre,
          SpineSelectionAccessibilityModeEnum.L1toOsCoccygis,
          'spineCT.configuration.localizationLumbarSpineTitle.value',
          'spineCT.configuration.localizerDescription.value'
        );
    }

    this.emitLocalizer.emit(localizerConfig);
  }

  clearCervicalSpineLocation() {
    this.model.cervicalSpineLocation = new SpineLocation();
    this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.cervicalSpineLocation));
  }
  clearThoracicSpineLocationLocation() {
    this.model.thoracicSpineLocation = new SpineLocation();
    this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.thoracicSpineLocation));
  }
  clearLumbarSpineLocation() {
    this.model.lumbarSpineLocation = new SpineLocation();
    this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.lumbarSpineLocation));
  }

  activeFirstLocalizer() {
    return (
      this.model.cervicalSpinePathologyType === PathologyTypeEnum.Kyphosis ||
      this.model.cervicalSpinePathologyType === PathologyTypeEnum.Kinking
    );
  }

  activeSecondLocalizer() {
    return this.model.thoracicSpinePathologyType === PathologyTypeEnum.Kinking;
  }
  activeThirdLocalizer() {
    return (
      this.model.lumbarSpinePathologyType === PathologyTypeEnum.Kinking ||
      this.model.lumbarSpinePathologyType === PathologyTypeEnum.Kyphosis
    );
  }
}
