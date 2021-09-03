import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ConfigurationFindingUiModel } from '@models/spineCT/ui/configuration/configuration-finding-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { EtiologyTypeEnum } from '@enums/spineCT/configuration/spondylolisthesis/etiology-type.enum';
import { DetailsTypeEnum } from '@enums/spineCT/configuration/spondylolisthesis/details-type.enum';
import { MeyerdingClassificationTypeEnum } from '@enums/spineCT/configuration/spondylolisthesis/meyerding-classification-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { Subscription } from 'rxjs';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { ConfigurationLargeLocalizerConfig } from '@models/spineCT/ui/configuration/configuration-large-localizer-config.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { compact } from 'lodash';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-spondylolisthesis',
  templateUrl: './spondylolisthesis.component.html',
  styleUrls: ['./spondylolisthesis.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class SpondylolisthesisComponent implements OnInit, OnDestroy {
  @Input() model: ConfigurationFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();

  detailsType = DetailsTypeEnum;
  meyerdingClassificationType = MeyerdingClassificationTypeEnum;
  etiologyType = EtiologyTypeEnum;

  selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(private validationHelperService: ValidationHelperService, private spineHelperService: SpineCtHelperService) {}

  ngOnInit() {
    if (compact(Object.values(this.model.spondylolisthesisLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.spondylolisthesisLocation));
    }
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  activeDetailsColumn() {
    if (compact(Object.values(this.model.spondylolisthesisLocation)).length === 0) {
      this.model.detailsType = this.detailsType.None;
      this.model.meyerdingClassificationType = this.meyerdingClassificationType.None;
      this.model.etiologyType = this.etiologyType.None;
      this.validationHelperService.removeError(nameof<ConfigurationFindingUiModel>(m => m.detailsType));
    } else {
      return true;
    }
  }

  openLargeLocalizer() {
    const localizerConfig: ConfigurationLargeLocalizerConfig = new ConfigurationLargeLocalizerConfig(
      this.model.spondylolisthesisLocation,
      SpineLocationLogicTypeEnum.OneDiscWithVertebre,
      SpineSelectionAccessibilityModeEnum.C0toOsCoccygis,
      'spineCT.configuration.localizationDefaultTitle.value',
      'spineCT.configuration.localizerDescription.value'
    );
    this.emitLocalizer.emit(localizerConfig);
  }
}
