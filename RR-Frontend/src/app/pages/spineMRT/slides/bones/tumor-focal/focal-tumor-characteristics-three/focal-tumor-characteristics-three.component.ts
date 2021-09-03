import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { BonesHelperService } from '../../bones-helper.service';
import { nameof } from 'ts-simple-nameof';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { SpineBonesLocalizerConfig } from '@models/spineMRT/ui/bones/spine-bones-localizer-config.model';

@Component({
  selector: 'rr-focal-tumor-characteristics-three',
  templateUrl: './focal-tumor-characteristics-three.component.html',
  styleUrls: ['./focal-tumor-characteristics-three.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalTumorCharacteristicsThreeComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(private bonesHelperService: BonesHelperService, private spineHelperService: SpineHelperService) {}

  ngOnInit() {
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpenConfig.next(
      new SpineBonesLocalizerConfig(
        nameof<BonesFindingUiModel>(m => m.spineLocation2),
        SpineLocationLogicTypeEnum.VertebreEach,
        'spineMRT.bones.selectVertebraMultiple.value'
      )
    );
  }

  clearLocalizer() {
    this.model.spineLocation2 = new SpineLocation();
  }
}
