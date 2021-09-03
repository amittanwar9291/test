import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ConfigurationFindingUiModel } from '@models/spineCT/ui/configuration/configuration-finding-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { VertexSpineTypeEnum } from '@enums/spineCT/configuration/scoliosis/vertex-spine-type.enum';
import { PatterTypeEnum } from '@enums/spineCT/configuration/scoliosis/pattern-type.enum';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { Subscription } from 'rxjs';
import { ConfigurationLargeLocalizerConfig } from '@models/spineCT/ui/configuration/configuration-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

@Component({
  selector: 'rr-scoliosis',
  templateUrl: './scoliosis.component.html',
  styleUrls: ['./scoliosis.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class ScoliosisComponent implements OnInit, OnDestroy {
  @Input() model: ConfigurationFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();

  deflectionType = VertexSpineTypeEnum;
  patternType = PatterTypeEnum;
  cervicalVertexSpineType = VertexSpineTypeEnum;
  thoracicVertexSpineType = VertexSpineTypeEnum;
  lumbarVertexSpineType = VertexSpineTypeEnum;

  selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(private spineHelperService: SpineCtHelperService) {}

  ngOnInit() {
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
      case this.selectionAccessibilityModeEnum.C0toC7:
        localizerConfig = new ConfigurationLargeLocalizerConfig(
          this.model.cervicalSpineLocation,
          SpineLocationLogicTypeEnum.OneVertebre,
          SpineSelectionAccessibilityModeEnum.C0toC7,
          'spineCT.configuration.localizationCervicalSpineTitle.value',
          'spineCT.configuration.pleaseSelectVertebraSingleChoice.value'
        );
        break;
      case this.selectionAccessibilityModeEnum.TH1toTH12:
        localizerConfig = new ConfigurationLargeLocalizerConfig(
          this.model.thoracicSpineLocation,
          SpineLocationLogicTypeEnum.OneVertebre,
          SpineSelectionAccessibilityModeEnum.TH1toTH12,
          'spineCT.configuration.localizationThoracicSpineTitle.value',
          'spineCT.configuration.pleaseSelectVertebraSingleChoice.value'
        );
        break;
      case this.selectionAccessibilityModeEnum.L1toOsCoccygis:
        localizerConfig = new ConfigurationLargeLocalizerConfig(
          this.model.lumbarSpineLocation,
          SpineLocationLogicTypeEnum.OneVertebre,
          SpineSelectionAccessibilityModeEnum.L1toOsCoccygis,
          'spineCT.configuration.localizationLumbarSpineTitle.value',
          'spineCT.configuration.pleaseSelectVertebraSingleChoice.value'
        );
    }
    this.emitLocalizer.emit(localizerConfig);
  }

  resetLocalizer(localizer) {
    this.model[localizer] = new SpineLocation();
  }
}
