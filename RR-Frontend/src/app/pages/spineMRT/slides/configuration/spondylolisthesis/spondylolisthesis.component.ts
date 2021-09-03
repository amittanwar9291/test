import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { EtiologyTypeEnum } from '@enums/spineMRT/configuration/spondylolisthesis/etiology-type.enum';
import { DetailsTypeEnum } from '@enums/spineMRT/configuration/spondylolisthesis/details-type.enum';
import { MeyerdingClassificationTypeEnum } from '@enums/spineMRT/configuration/spondylolisthesis/meyerding-classification-type.enum';
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
  selector: 'rr-spine-mrt-configuration-spondylolisthesis',
  templateUrl: './spondylolisthesis.component.html',
  styleUrls: ['./spondylolisthesis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SpondylolisthesisComponent implements OnInit, OnDestroy {
  @Input() model: ConfigurationFindingUiModel;

  @Output() emitLocalizer = new EventEmitter();

  meyerdingClassificationTypeEnum: typeof MeyerdingClassificationTypeEnum;
  etiologyTypeEnum: typeof EtiologyTypeEnum;
  detailsTypeEnum: typeof DetailsTypeEnum;

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService,
    private spineHelperService: SpineHelperService
  ) {
    this.meyerdingClassificationTypeEnum = MeyerdingClassificationTypeEnum;
    this.etiologyTypeEnum = EtiologyTypeEnum;
    this.detailsTypeEnum = DetailsTypeEnum;
  }

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

  openLargeLocalizer() {
    this.emitLocalizer.emit(
      new ConfigurationLargeLocalizerConfig(
        this.model.spondylolisthesisLocation,
        SpineLocationLogicTypeEnum.OneDiscWithVertebre,
        null,
        null,
        'spineMRT.configuration.segementsSingleSelectionLocalizerDescription.value'
      )
    );
  }

  clearMeyerding(value: DetailsTypeEnum): string {
    return value !== this.model.detailsType ? 'stadium-meyerding-block' : '';
  }
}
