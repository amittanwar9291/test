import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { BonesHelperService } from '../bones-helper.service';
import { nameof } from 'ts-simple-nameof';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineBonesLocalizerConfig } from '@models/spineMRT/ui/bones/spine-bones-localizer-config.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';

@Component({
  selector: 'rr-bone-marrow-edema',
  templateUrl: './bone-marrow-edema.component.html',
  styleUrls: ['./bone-marrow-edema.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BoneMarrowEdemaComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  largeLocalizerSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private bonesHelperService: BonesHelperService,
    private spineHelperService: SpineHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.largeLocalizerSubscription = this.bonesHelperService.largeLocalizerOpenConfig.subscribe(value => {
      if (!value) {
        this.onLocalizerCloseChange();
      }
    });
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.largeLocalizerSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpenConfig.next(
      new SpineBonesLocalizerConfig(
        nameof<BonesFindingUiModel>(m => m.spineLocation),
        SpineLocationLogicTypeEnum.VertebreEach,
        'spineMRT.bones.selectVertebraMultiple.value'
      )
    );
  }

  private onLocalizerCloseChange(): void {
    if (compact(Object.values(this.model.spineLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocation));
    }
    if (compact(Object.values(this.model.spineLocation)).length !== 1) {
      this.model.traumaLocation = new DiscGeneralLocationModel();
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.traumaLocation));
    }
  }

  isSpineLocationSingleChoice(): boolean {
    let spineLocationChoices = 0;
    for (const prop in this.model.spineLocation) {
      if (this.model.spineLocation[prop]) {
        spineLocationChoices++;
      }
    }
    return spineLocationChoices === 1;
  }
}
