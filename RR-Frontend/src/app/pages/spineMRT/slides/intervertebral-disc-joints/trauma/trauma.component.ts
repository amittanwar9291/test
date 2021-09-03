import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { IntervertebralDiscJointsHelperService } from '../intervertebral-disc-joints-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { IntervertebralDiscJointsLargeLocalizerConfig } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-large-localizer-config.model';

@Component({
  selector: 'rr-trauma',
  templateUrl: './trauma.component.html',
  styleUrls: ['./trauma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TraumaComponent implements OnInit, OnDestroy {
  @Input() model: IntervertebralDiscJointsFindingUiModel;

  largeLocalizerOpenedSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper,
    private spineHelperService: SpineHelperService
  ) {}

  ngOnInit() {
    this.largeLocalizerOpenedSubscription = this.intervertebralDiscJointsHelperService.largeLocalizerOpened.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.spineLocation) !== 'None') {
        this.validationHelperService.removeError(nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation));
      }
    });
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  openLocalizer() {
    this.intervertebralDiscJointsHelperService.largeLocalizerOpened.next(
      new IntervertebralDiscJointsLargeLocalizerConfig(
        SpineLocationLogicTypeEnum.DiscEachIntervertebre,
        'spineMRT.disc.selectIntervertebralDiscOfSegmentMultiple.value'
      )
    );
  }

  ngOnDestroy() {
    this.largeLocalizerOpenedSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }
}
