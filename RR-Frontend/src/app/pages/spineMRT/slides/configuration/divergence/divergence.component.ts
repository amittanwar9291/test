import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { PathologyTypeEnum } from '@enums/spineMRT/configuration/deviation/pathology-type.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { ConfigurationFindingUiModel } from '@models/spineMRT/ui/configuration/configuration-finding-ui.model';

import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { ConfigurationLargeLocalizerConfig } from '@models/spineMRT/ui/configuration/configuration-large-localizer-config.model';
import { compact } from 'lodash';

@Component({
  selector: 'rr-spine-mrt-configuration-divergence',
  templateUrl: './divergence.component.html',
  styleUrls: ['./divergence.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DivergenceComponent implements OnInit, OnDestroy {
  @Input() model: ConfigurationFindingUiModel;

  @Output() emitLocalizer = new EventEmitter();

  pathologyTypeEnum = PathologyTypeEnum;

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;

  constructor(
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService,
    private spineHelperService: SpineHelperService
  ) {}

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
          'spineMRT.configuration.localizationCervicalSpineTitle.value',
          'spineMRT.configuration.segementsSingleSelectionLocalizerDescription.value'
        );
        break;
      case this.selectionAccessibilityModeEnum.TH1toL1:
        localizerConfig = new ConfigurationLargeLocalizerConfig(
          this.model.thoracicSpineLocation,
          SpineLocationLogicTypeEnum.OneDiscWithVertebre,
          SpineSelectionAccessibilityModeEnum.TH1toL1,
          'spineMRT.configuration.localizationThoracicSpineTitle.value',
          'spineMRT.configuration.segementsSingleSelectionLocalizerDescription.value'
        );
        break;
      case this.selectionAccessibilityModeEnum.L1toOsCoccygis:
        localizerConfig = new ConfigurationLargeLocalizerConfig(
          this.model.lumbarSpineLocation,
          SpineLocationLogicTypeEnum.OneDiscWithVertebre,
          SpineSelectionAccessibilityModeEnum.L1toOsCoccygis,
          'spineMRT.configuration.localizationLumbarSpineTitle.value',
          'spineMRT.configuration.segementsSingleSelectionLocalizerDescription.value'
        );
    }
    this.emitLocalizer.emit(localizerConfig);
  }

  clearLocalizer(accessibilityMode: SpineSelectionAccessibilityModeEnum) {
    if (accessibilityMode === this.selectionAccessibilityModeEnum.C0toTH1) {
      this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.cervicalSpineLocation));
      this.model.cervicalSpineLocation = new SpineLocation();
    }
    if (accessibilityMode === this.selectionAccessibilityModeEnum.TH1toL1) {
      this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.thoracicSpineLocation));
      this.model.thoracicSpineLocation = new SpineLocation();
    }
    if (accessibilityMode === this.selectionAccessibilityModeEnum.L1toOsCoccygis) {
      this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.lumbarSpineLocation));
      this.model.lumbarSpineLocation = new SpineLocation();
    }
  }
}
