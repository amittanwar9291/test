import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import { IntervertebralDiscJointsHelperService } from '../intervertebral-disc-joints-helper.service';
import { BulgingTypesEnum, SideTypesEnum } from '@enums/spineMRT/intervertebral-disc-joints';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { IntervertebralDiscJointsLargeLocalizerConfig } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-large-localizer-config.model';

@Component({
  selector: 'rr-degeneration',
  templateUrl: './degeneration.component.html',
  styleUrls: ['./degeneration.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DegenerationComponent implements OnInit, OnDestroy {
  @Input() model: IntervertebralDiscJointsFindingUiModel;
  largeLocalizerOpenedSubscription: Subscription;

  bulgingTypesEnum = BulgingTypesEnum;
  sideTypesEnum = SideTypesEnum;
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
        SpineLocationLogicTypeEnum.DiscEach,
        'spineMRT.disc.selectIntervertebralDiscMultiple.value'
      )
    );
  }

  ngOnDestroy() {
    this.largeLocalizerOpenedSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }
}
