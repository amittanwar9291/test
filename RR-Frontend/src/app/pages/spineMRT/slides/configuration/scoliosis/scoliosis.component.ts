import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { ScoliosisTypeEnum } from '@enums/spineMRT/configuration/scoliosis/scoliosis-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { ConfigurationFindingUiModel } from '@models/spineMRT/ui/configuration/configuration-finding-ui.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { Subscription } from 'rxjs';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { ConfigurationLargeLocalizerConfig } from '@models/spineMRT/ui/configuration/configuration-large-localizer-config.model';

@Component({
  selector: 'rr-spine-mrt-configuration-scoliosis',
  templateUrl: './scoliosis.component.html',
  styleUrls: ['./scoliosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ScoliosisComponent implements OnInit, OnDestroy {
  @Input() model: ConfigurationFindingUiModel;
  @Input() activeItemIndex: number;

  @Output() emitLocalizer = new EventEmitter();

  scoliosisTypeEnum = ScoliosisTypeEnum;

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  spineSelectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;

  constructor(private spineHelperService: SpineHelperService) {
    this.scoliosisTypeEnum = ScoliosisTypeEnum;
  }

  ngOnInit() {
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  clearLocalizer(accessibilityMode: SpineSelectionAccessibilityModeEnum) {
    if (accessibilityMode === this.spineSelectionAccessibilityModeEnum.C0toC7) {
      this.model.cervicalSpineLocation = new SpineLocation();
    }
    if (accessibilityMode === this.spineSelectionAccessibilityModeEnum.TH1toTH12) {
      this.model.thoracicSpineLocation = new SpineLocation();
    }
    if (accessibilityMode === this.spineSelectionAccessibilityModeEnum.L1toOsCoccygis) {
      this.model.lumbarSpineLocation = new SpineLocation();
    }
  }

  openLargeLocalizer(accessibilityMode: SpineSelectionAccessibilityModeEnum) {
    if (accessibilityMode === this.spineSelectionAccessibilityModeEnum.C0toC7) {
      this.emitLocalizer.emit(
        new ConfigurationLargeLocalizerConfig(
          this.model.cervicalSpineLocation,
          SpineLocationLogicTypeEnum.OneVertebre,
          SpineSelectionAccessibilityModeEnum.C0toC7,
          'spineMRT.configuration.localizationCervicalSpineTitle.value',
          'spineMRT.configuration.vertrebaSingleSelectionLocalizerDescription.value'
        )
      );
    }
    if (accessibilityMode === this.spineSelectionAccessibilityModeEnum.TH1toTH12) {
      this.emitLocalizer.emit(
        new ConfigurationLargeLocalizerConfig(
          this.model.thoracicSpineLocation,
          SpineLocationLogicTypeEnum.OneVertebre,
          SpineSelectionAccessibilityModeEnum.TH1toTH12,
          'spineMRT.configuration.localizationThoracicSpineTitle.value',
          'spineMRT.configuration.vertrebaSingleSelectionLocalizerDescription.value'
        )
      );
    }
    if (accessibilityMode === this.spineSelectionAccessibilityModeEnum.L1toOsCoccygis) {
      this.emitLocalizer.emit(
        new ConfigurationLargeLocalizerConfig(
          this.model.lumbarSpineLocation,
          SpineLocationLogicTypeEnum.OneVertebre,
          SpineSelectionAccessibilityModeEnum.L1toOsCoccygis,
          'spineMRT.configuration.localizationLumbarSpineTitle.value',
          'spineMRT.configuration.vertrebaSingleSelectionLocalizerDescription.value'
        )
      );
    }
  }
}
