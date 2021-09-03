import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiscFindingUiModel } from '@models/spineCT';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DiscHelperService, SpineCTLargeLocalizerConfig } from '../disc-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-trauma',
  templateUrl: './trauma.component.html',
  styleUrls: ['./trauma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TraumaComponent implements OnInit, OnDestroy {
  @Input() model: DiscFindingUiModel;

  subscribtions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private discHelperService: DiscHelperService,
    private spineCtHelperService: SpineCtHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit(): void {
    this.subscribtions.push(this.discHelperService.largeLocalizerOpenedConfig.subscribe(() => this.onLocalizerClose()));
    this.subscribtions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
  }

  ngOnDestroy(): void {
    this.subscribtions.forEach(s => s.unsubscribe());
  }

  openLocalizer(): void {
    this.discHelperService.largeLocalizerOpenedConfig.next(
      new SpineCTLargeLocalizerConfig(
        SpineLocationLogicTypeEnum.DiscEachIntervertebre,
        'spineCT.disc.pleaseSelectTheDiscOfTheCorrespondingSegmentMultipleChoice.value'
      )
    );
  }

  onLocalizerClose(): void {
    const isAnySelectionOnLocalizer = this.enumMapper.mapToString(this.model.spineLocation) !== 'None';
    if (isAnySelectionOnLocalizer) {
      this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.spineLocation));
    }
  }

  checkAndClearSubordinate(): void {
    if (
      !this.model.isRuptureOfPosteriorLongitudinalLigament &&
      !this.model.isRuptureOfAnteriorLongitudinalLigament &&
      !this.model.isIntervertebralDiscRupture
    ) {
      this.model.isSubordinate = false;
    }
  }
}
